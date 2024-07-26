import supabase from "@/config/supabase";
import { apiSlice } from "../apiSlice";
import toast from "react-hot-toast";
import { getDefaultEnvironments } from "@/data/defaults";
import { Environment } from "@/utils/definitions";

export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => {
    return {
      createDefaultEnvironments: builder.mutation({
        queryFn: async ({
          projectIds,
          userId,
        }: {
          projectIds: string[];
          userId: string;
        }): never | Promise<{ data: Environment[] }> => {
          const { data, error: err } = await supabase
            .from("environments")
            .insert(getDefaultEnvironments({ projectIds, userId }))
            .select();

          if (err) {
            toast.error(
              `We had trouble generating the default environments ${err.message}`,
            );
            console.error(err.message);
            throw err;
          }

          return { data };
        },
        invalidatesTags: ["environments"],
      }),
      getUserEnvironments: builder.query({
        queryFn: async ({
          userId,
          curOrganizationId,
        }: {
          userId: string;
          curOrganizationId: string;
        }) => {
          const { data: environments, error } =
            curOrganizationId === null
              ? await supabase
                  .from("environments")
                  .select("*")
                  .eq("user_id", userId)
                  .is("organization_id", null)
              : await supabase
                  .from("environments")
                  .select("*")
                  .eq("user_id", userId)
                  .eq("organization_id", curOrganizationId);

          if (error) {
            toast.error(`We had trouble fetching your environments ${error}`);
            console.error(error.message);
            throw error;
          }
          return { data: environments };
        },
        providesTags: ["environments"],
      }),

      // For getting the count
      getUserEnvironmentsCount: builder.query({
        queryFn: async ({
          userId,
          curOrganizationId,
        }: {
          userId: string;
          curOrganizationId: string;
        }) => {
          const { count: environmentsCount, error } =
            curOrganizationId === null
              ? await supabase
                  .from("environments")
                  .select("id", { count: "exact", head: true })
                  .eq("user_id", userId)
                  .is("organization_id", null)
              : await supabase
                  .from("environments")
                  .select("id", { count: "exact", head: true })
                  .eq("user_id", userId)
                  .eq("organization_id", curOrganizationId);

          if (error) {
            toast.error(`We had trouble fetching your environments ${error}`);
            console.error(error.message);
            throw error;
          }
          return { data: environmentsCount };
        },
        providesTags: ["environments"],
      }),
    };
  },
});

export const {
  useCreateDefaultEnvironmentsMutation: useCreateDefaultEnvironments,
  useGetUserEnvironmentsQuery: useGetUserEnvironments,
  useGetUserEnvironmentsCountQuery: useGetUserEnvironmentsCount,
} = extendedApiSlice;
export default apiSlice.reducer;
