import { getDefaultTags } from "@/data/defaults";
import { apiSlice } from "../apiSlice";
import supabase from "@/config/supabase";
import toast from "react-hot-toast";
import { Tags } from "@/utils/definitions";

export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => {
    return {
      createDefaultTags: builder.mutation({
        queryFn: async ({
          userId,
          goalIds,
        }: {
          userId: string;
          goalIds: string[];
        }): never | Promise<{ data: Tags[] }> => {
          const { data, error } = await supabase
            .from("tags")
            .insert(getDefaultTags({ userId, goalIds }))
            .select();

          if (error) {
            toast.error(
              `We had trouble generating default tags ${error.message}`,
            );
            console.error(error.message);
            throw error;
          }

          return { data };
        },
        invalidatesTags: ["tags"],
      }),
    };
  },
});

export const { useCreateDefaultTagsMutation: useCreateDefaultTags } =
  extendedApiSlice;
export default apiSlice.reducer;
