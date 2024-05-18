import supabase from "@/config/supabase";
import { apiSlice } from "../apiSlice";
import toast from "react-hot-toast";

export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => {
    return {
      createDefaults: builder.mutation({
        queryFn: async ({ todoIds, userId }) => {
          const { data, error: err } = await supabase.from("projects").insert([
            {
              user_id: userId,
              title: "New Project",
              description: "Project description",
              state: "pending",
              priority: 2,
              deadline: "2024-06-30T23:59:59+00:00", // Use ISO 8601 format for timestamp
              progress: 50,
              todo_ids: todoIds,
            },
          ]);

          if (err) {
            toast.error(
              `We had trouble Generating the default project: ${err.message}`,
            );
            throw err;
          }

          return { data };
        },
      }),
    };
  },
});
