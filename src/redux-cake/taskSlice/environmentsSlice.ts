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
        queryFn: async ({ userId }: { userId: string }) => {
          const { data: environments, error } = await supabase
            .from("environments")
            .select("*")
            .eq("user_id", userId);

          if (error) {
            toast.error(`We had trouble fetching your environments ${error}`);
            console.error(error.message);
            throw error;
          }
          return { data: environments };
        },
      }),
    };
  },
});

export const {
  useCreateDefaultEnvironmentsMutation: useCreateDefaultEnvironments,
  useGetUserEnvironmentsQuery: useGetUserEnvironments,
} = extendedApiSlice;
export default apiSlice.reducer;
