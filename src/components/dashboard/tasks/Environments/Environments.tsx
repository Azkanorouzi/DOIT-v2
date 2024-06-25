import { useGetUserEnvironments } from "@/redux-cake/taskSlice/environmentsSlice";
import Tasks from "../Tasks";
import useCurrentUser from "@/hooks/useCurrentUser";

export default function Environments() {
  // const { id, isLoading: isUserLoading } = useCurrentUser();
  // const { data, isLoading: isEnvLoading } = useGetUserEnvironments({
  //   userId: id,
  // });

  return (
    <Tasks type="environment">
      {/* ====== Default environments ====== */}
      <Tasks.Environment type="today" name="Today">
        <Tasks.EditButtons id="today" />
        <Tasks.TaskNumber id="today" />
      </Tasks.Environment>
      <Tasks.Environment type="starred" name="Starred">
        <Tasks.EditButtons id="starred" />
        <Tasks.TaskNumber id="starred" />
      </Tasks.Environment>
      <Tasks.Environment type="important" name="Important">
        <Tasks.EditButtons id="important" />
        <Tasks.TaskNumber id="important" />
      </Tasks.Environment>
      <Tasks.Environment type="upcoming" name="Upcoming">
        <Tasks.EditButtons id="upcoming" />
        <Tasks.TaskNumber id="upcoming" />
      </Tasks.Environment>
      <Tasks.Environment type="someday" name="Someday">
        <Tasks.EditButtons id="someday" />
        <Tasks.TaskNumber id="someday" />
      </Tasks.Environment>
      <Tasks.Environment type="passed" name="Passed">
        <Tasks.EditButtons id="passed" />
        <Tasks.TaskNumber id="passed" />
      </Tasks.Environment>
      {/* ====== Fetched environments ====== */}
    </Tasks>
  );
}
