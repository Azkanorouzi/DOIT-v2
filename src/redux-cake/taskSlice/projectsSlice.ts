import supabase from "@/config/supabase";
import { apiSlice } from "../apiSlice";
import toast from "react-hot-toast";
import { getDefaultProjects } from "@/data/defaults";
import { Project } from "@/utils/definitions";

export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => {
    return {
      createDefaultProjects: builder.mutation({
        queryFn: async ({
          userId,
          gettingFamiliarIds,
          onlineshopIds,
        }: {
          userId: string;
          gettingFamiliarIds: string[];
          onlineshopIds: string[];
        }): never | Promise<{ data: Project[] }> => {
          const { data, error: err } = await supabase
            .from("projects")
            .insert(
              getDefaultProjects({ userId, gettingFamiliarIds, onlineshopIds }),
            )
            .select();

          if (err) {
            toast.error(
              `We had trouble Generating the default project: ${err.message}`,
            );
            console.error(err.message);
            throw err;
          }

          return { data };
        },

        invalidatesTags: ["projects"],
      }),
    };
  },
});

export const { useCreateDefaultProjectsMutation: useCreateDefaultProjects } =
  extendedApiSlice;
export default apiSlice.reducer;
