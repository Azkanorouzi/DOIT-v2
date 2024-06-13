import supabase from "@/config/supabase";
import { apiSlice } from "../apiSlice";
import toast from "react-hot-toast";
import { getDefaultTodos, getDefaultTodosShop } from "@/data/defaults";
import { Todo } from "@/utils/definitions";

export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => {
    return {
      createDefaultTodos: builder.mutation({
        queryFn: async ({
          userId,
        }):
          | never
          | Promise<{
              data: { onlineshopData: Todo[]; gettingFamiliarData: Todo[] };
            }> => {
          // Getting familiar default generation
          const { data: gettingFamiliarData, error: err } = await supabase
            .from("todos")
            .insert(getDefaultTodos({ userId }))
            .select();

          // Online shop default generation
          const { data: onlineshopData, error } = await supabase
            .from("todos")
            .insert(getDefaultTodosShop({ userId }))
            .select();

          if (err || error) {
            toast.error(
              `We had trouble Generating the default todos: ${err.message}`,
            );
            err && console.error(err.message);
            error && console.error(err.message);
            throw err ? err : error;
          }

          return { data: { onlineshopData, gettingFamiliarData } };
        },
        invalidatesTags: ["todos"],
      }),
    };
  },
});

export const { useCreateDefaultTodosMutation: useCreateDefaultTodos } =
  extendedApiSlice;
export default apiSlice.reducer;
