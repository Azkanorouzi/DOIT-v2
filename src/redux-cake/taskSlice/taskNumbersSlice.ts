import { getStartEndOfTheDay } from "@/utils/getStartEndOfDay";
import { apiSlice } from "../apiSlice";
import supabase from "@/config/supabase";
import toast from "react-hot-toast";
import { getNowIso } from "@/utils/getNowIso";

export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => {
    return {
      getEnvCount: builder.query({
        queryFn: async ({ envId, userId }) => {
          if (envId.length < 13) return { data: 0 };
          const [
            { data: envProjectsId, error: todoError },
            { data: envTodosId, error: projectError },
          ] = await Promise.all([
            supabase
              .from("environments")
              .select("project_ids")
              .eq("user_id", userId)
              .eq("id", envId),

            supabase
              .from("environments")
              .select("todo_ids")
              .eq("user_id", userId)
              .eq("id", envId),
          ]);

          console.log(envProjectsId, envTodosId, "🆎sdfdsf");

          const totalCount =
            envProjectsId[0]?.project_ids.length +
            envTodosId[0]?.todo_ids.length;

          const error = todoError || projectError;

          if (error) {
            toast.error(
              `We had trouble getting the statistics for number of environments: ${error.message}`,
            );
            console.error(error.message);
            return { error: { message: error.message } };
          }
          return { data: totalCount };
        },
      }),
      getPassedCount: builder.query({
        queryFn: async ({ userId }) => {
          const now = getNowIso();
          const [
            { count: todoCount, error: todoError },
            { count: projectCount, error: projectError },
          ] = await Promise.all([
            supabase
              .from("todos")
              .select("id", { head: true, count: "exact" })
              .eq("user_id", userId)
              .lt("deadline", now),

            supabase
              .from("projects")
              .select("id", { head: true, count: "exact" })
              .eq("user_id", userId)
              .lt("deadline", now),
          ]);

          const totalCount = projectCount + todoCount;

          const error = todoError || projectError;

          if (error) {
            toast.error(
              `We had trouble getting the statistics for number of upcomings: ${error.message}`,
            );
            console.error(error.message);
            return { error: { message: error.message } };
          }
          return { data: totalCount };
        },
      }),
      getSomeDayCount: builder.query({
        queryFn: async ({ userId }) => {
          const [
            { count: todoCount, error: todoError },
            { count: projectCount, error: projectError },
          ] = await Promise.all([
            supabase
              .from("todos")
              .select("id", { head: true, count: "exact" })
              .eq("user_id", userId)
              .is("deadline", null),

            supabase
              .from("projects")
              .select("id", { head: true, count: "exact" })
              .eq("user_id", userId)
              .is("deadline", null),
          ]);

          const totalCount = projectCount + todoCount;

          const error = todoError || projectError;

          if (error) {
            toast.error(
              `We had trouble getting the statistics for number of upcomings: ${error.message}`,
            );
            console.error(error.message);
            return { error: { message: error.message } };
          }
          return { data: totalCount };
        },
      }),
      getUpcomingCount: builder.query({
        queryFn: async ({ userId }) => {
          const now = getNowIso();
          const [
            { count: todoCount, error: todoError },
            { count: projectCount, error: projectError },
          ] = await Promise.all([
            supabase
              .from("todos")
              .select("id", { head: true, count: "exact" })
              .eq("user_id", userId)
              .gt("deadline", now),

            supabase
              .from("projects")
              .select("id", { head: true, count: "exact" })
              .eq("user_id", userId)
              .gt("deadline", now),
          ]);

          const totalCount = projectCount + todoCount;

          const error = todoError || projectError;

          if (error) {
            toast.error(
              `We had trouble getting the statistics for number of upcomings: ${error.message}`,
            );
            console.error(error.message);
            return { error: { message: error.message } };
          }
          return { data: totalCount };
        },
      }),
      getImportantCount: builder.query({
        queryFn: async ({ userId }) => {
          const [
            { count: todoCount, error: todoError },
            { count: projectCount, error: projectError },
          ] = await Promise.all([
            supabase
              .from("todos")
              .select("id", { head: true, count: "exact" })
              .eq("user_id", userId)
              .gte("priority", 4),

            supabase
              .from("projects")
              .select("id", { head: true, count: "exact" })
              .eq("user_id", userId)
              .gte("priority", 4),
          ]);

          const totalCount = projectCount + todoCount;

          const error = todoError || projectError;

          if (error) {
            toast.error(
              `We had trouble getting the statistics for number of importants: ${error.message}`,
            );
            console.error(error.message);
            return { error: { message: error.message } };
          }
          return { data: totalCount };
        },
      }),
      getStarCount: builder.query({
        queryFn: async ({ userId }) => {
          const { count: todoCount, error: todoError } = await supabase
            .from("todos")
            .select("id", { head: true, count: "exact" })
            .eq("user_id", userId)
            .eq("starred", true);

          const { count: projectCount, error: projectError } = await supabase
            .from("projects")
            .select("id", { head: true, count: "exact" })
            .eq("user_id", userId)
            .eq("starred", true);

          const totalCount = projectCount + todoCount;

          const error = todoError || projectError;

          if (error) {
            toast.error(
              `We had trouble getting the statistics for number of starred: ${error.message}`,
            );
            console.error(error.message);
            return { data: totalCount };
          }
          return { data: totalCount };
        },
      }),
      getTodayCount: builder.query({
        queryFn: async ({ userId }) => {
          const { startOfDay, endOfDay } = getStartEndOfTheDay();
          // Getting the count of today todos
          const { count: todoCount, error: todoError } = await supabase
            .from("todos")
            .select("id", { head: true, count: "exact" })
            .gte("deadline", startOfDay)
            .lte("deadline", endOfDay)
            .eq("user_id", userId);

          const { count: projectCount, error: projectError } = await supabase
            .from("projects")
            .select("id", { head: true, count: "exact" })
            .gte("deadline", startOfDay)
            .lte("deadline", endOfDay)
            .eq("user_id", userId);

          const error = todoError || projectError;
          const totalCount = projectCount + todoCount;

          if (error) {
            toast.error(
              `We had trouble getting the statistics for number of todays: ${error.message}`,
            );
            console.error(error.message);
            return { data: totalCount };
          }
          return { data: totalCount };
        },
        // provides the based on the table name
        providesTags: ["todos", "projects"],
      }),
    };
  },
});

export const {
  useGetTodayCountQuery: useGetTodayCount,
  useGetStarCountQuery: useGetStarCount,
  useGetImportantCountQuery: useGetImportantCount,
  useGetUpcomingCountQuery: useGetUpcomingCount,
  useGetSomeDayCountQuery: useGetSomeDayCount,
  useGetPassedCountQuery: useGetPassedCount,
  useGetEnvCountQuery: useGetEnvCount,
} = extendedApiSlice;
export default apiSlice.reducer;
