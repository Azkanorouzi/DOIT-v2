import { getDefaultOrganizations } from "@/data/defaults";
import { apiSlice } from "../apiSlice";
import supabase from "@/config/supabase";
import toast from "react-hot-toast";
import { Organization } from "@/utils/definitions";

export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => {
    return {
      createDefaultOrganizations: builder.mutation({
        queryFn: async ({
          userId,
        }: {
          userId: string;
        }): never | Promise<{ data: Organization[] }> => {
          const { data, error } = await supabase
            .from("organization")
            .insert(getDefaultOrganizations({ userId }))
            .select();

          if (error) {
            toast.error(
              `We had trouble generating default organizations ${error.message}`,
            );
            console.error(error.message);
            throw error;
          }

          return { data };
        },
        invalidatesTags: ["organizations"],
      }),
      getUserOrganizations: builder.query({
        queryFn: async ({
          userId,
        }: {
          userId: string;
        }): never | Promise<{ data: Organization[] }> => {
          const { data, error } = await supabase
            .from("organization")
            .select()
            .contains("participants", [userId]);

          if (error) {
            toast.error(
              `We had trouble generating default organizations ${error.message}`,
            );
            console.error(error.message);
            throw error;
          }

          return { data };
        },
        providesTags: ["organizations"],
      }),
    };
  },
});

export const {
  useCreateDefaultOrganizationsMutation: useCreateDefaultOrganizations,
  useGetUserOrganizationsQuery: useGetUserOrganizations,
} = extendedApiSlice;
export default apiSlice.reducer;
