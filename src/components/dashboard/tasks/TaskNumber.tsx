import { useContext } from "react";
import { TaskContext } from "./Tasks";
import { specialEnvironments } from "@/utils/definitions";
import {
  useGetStarCount,
  useGetTodayCount,
  useGetImportantCount,
  useGetUpcomingCount,
  useGetSomeDayCount,
  useGetPassedCount,
  useGetEnvCount,
} from "@/redux-cake/taskSlice/taskNumbersSlice";
import LoaderSmall from "@/components/ui/LoaderSmall";
import useCurrentUser from "@/hooks/useCurrentUser";

export default function TaskNumber({
  id,
}: {
  id: specialEnvironments | string;
}) {
  const { selected } = useContext(TaskContext);
  const { id: userId } = useCurrentUser();
  const { isLoading: isTodayLoading, data: todayCount } = useGetTodayCount({
    userId,
  });
  const { isLoading: isStarredLoading, data: starredCount } = useGetStarCount({
    userId,
  });

  const { isLoading: isImportantLoading, data: importantCount } =
    useGetImportantCount({
      userId,
    });

  const { isLoading: isUpcomingLoading, data: upcomingCount } =
    useGetUpcomingCount({
      userId,
    });

  const { isLoading: isSomeDayLoading, data: someDayCount } =
    useGetSomeDayCount({
      userId,
    });

  const { isLoading: isPassedLoading, data: passedCount } = useGetPassedCount({
    userId,
  });

  const { isLoading: isEnvLoading, data: envCount } = useGetEnvCount({
    envId: id,
    userId,
  });

  const isLoading =
    id === "today"
      ? isTodayLoading
      : id === "starred"
        ? isStarredLoading
        : id === "important"
          ? isImportantLoading
          : id === "upcoming"
            ? isUpcomingLoading
            : id === "someday"
              ? isSomeDayLoading
              : id === "passed"
                ? isPassedLoading
                : isEnvLoading;

  return (
    <p
      className={`w-8 border border-primary rounded-full h-8 flex justify-center items-center text-center transition-all ${selected === id ? "scale-110 bg-primary" : ""}`}
    >
      {isLoading && <LoaderSmall />}
      {id === "today"
        ? todayCount
        : id === "starred"
          ? starredCount
          : id === "important"
            ? importantCount
            : id === "upcoming"
              ? upcomingCount
              : id === "someday"
                ? someDayCount
                : id === "passed"
                  ? passedCount
                  : envCount}
    </p>
  );
}
