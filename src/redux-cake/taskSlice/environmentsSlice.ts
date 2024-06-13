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
    };
  },
});

export const {
  useCreateDefaultEnvironmentsMutation: useCreateDefaultEnvironments,
} = extendedApiSlice;
export default apiSlice.reducer;
