import supabase from "@/config/supabase";
import { apiSlice } from "../apiSlice";
import { getDefaultGoals } from "@/data/defaults";
import toast from "react-hot-toast";
import { Goal } from "@/utils/definitions";

export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => {
    return {
      createDefaultGoals: builder.mutation({
        queryFn: async ({
          userId,
          projectIds,
        }: {
          userId: string;
          projectIds: string[];
        }): never | Promise<{ data: Goal[] }> => {
          const { data, error } = await supabase
            .from("goals")
            .insert(getDefaultGoals({ userId, projectIds }))
            .select();

          if (error) {
            toast.error(
              `We had trouble creating default goals ${error.message}`,
            );
            console.error(error.message);
            throw error;
          }

          return { data };
        },
        invalidatesTags: ["goals"],
      }),
    };
  },
});

export const { useCreateDefaultGoalsMutation: useCreateDefaultGoals } =
  extendedApiSlice;
export default apiSlice.reducer;
