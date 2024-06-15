import Tasks from "./Tasks";

export default function Environments() {
  return (
    <Tasks type="environment">
      <Tasks.Environment type="today" name="Today">
        <Tasks.EditButtons />
        <Tasks.TaskNumber />
      </Tasks.Environment>
      <Tasks.Environment type="starred" name="Starred">
        <Tasks.EditButtons />
        <Tasks.TaskNumber />
      </Tasks.Environment>
      <Tasks.Environment type="important" name="Important">
        <Tasks.EditButtons />
        <Tasks.TaskNumber />
      </Tasks.Environment>
      <Tasks.Environment type="upcoming" name="Upcoming">
        <Tasks.EditButtons />
        <Tasks.TaskNumber />
      </Tasks.Environment>
      <Tasks.Environment type="someday" name="Someday">
        <Tasks.EditButtons />
        <Tasks.TaskNumber />
      </Tasks.Environment>
      <Tasks.Environment type="passed" name="Passed">
        <Tasks.EditButtons />
        <Tasks.TaskNumber />
      </Tasks.Environment>
    </Tasks>
  );
}
