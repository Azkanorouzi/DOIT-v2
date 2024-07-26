import Tasks from "../Tasks";
import EnvironmentSkeleton from "./EnvironmentSkeleton";
import {
  useCreateDefaultEnvironments,
  useGetUserEnvironments,
  useGetUserEnvironmentsCount,
} from "@/redux-cake/taskSlice/environmentsSlice";
import useCurrentUser from "@/hooks/useCurrentUser";
import { useCurOrganization } from "@/contexts/OrganizationContext";
import { RenderWithCount } from "@/components/ui/RenderWithCount";

export default function Environments() {
  const { id, isLoading: isUserLoading } = useCurrentUser();
  const [, { isLoading: isCreatingDefaultEnvironments }] =
    useCreateDefaultEnvironments();
  const { curOrganizationId } = useCurOrganization();
  // Getting the user environment count
  const { data: envCount, isLoading: isGettingUserEnvCount } =
    useGetUserEnvironmentsCount({
      userId: id,
      curOrganizationId,
    });
  // we need to pass in the current organization id to the useGetUserEnvironments to make sure only the current organization environments are fetched
  const { data: fetchedEnvironments, isLoading: isEnvLoading } =
    useGetUserEnvironments({
      userId: id,
      curOrganizationId,
    });

  console.log(fetchedEnvironments, "❌ fetched environment");
  const isLoading =
    isUserLoading || isEnvLoading || isCreatingDefaultEnvironments;

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

      <hr />
      {/* ====== Fetched environments ====== */}
      {isLoading && (
        <>
          {
            // Renders one skeleton per each environment
            <RenderWithCount
              count={isGettingUserEnvCount ? 4 : envCount}
              renderrer={() => <EnvironmentSkeleton />}
              max={4}
            />
          }
        </>
      )}

      {!isLoading &&
        fetchedEnvironments?.map((env) => {
          console.log(env, "thisis the env ⭕");
          return (
            <Tasks.Environment
              key={env?.id}
              envId={env?.id}
              name={env?.title}
              icon={env?.icon}
            >
              <Tasks.EditButtons id={env?.id} />
              <Tasks.TaskNumber id={env?.id} />
            </Tasks.Environment>
          );
        })}
    </Tasks>
  );
}
