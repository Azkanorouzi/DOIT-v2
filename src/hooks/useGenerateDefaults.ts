import { useCreateDefaultEnvironments } from "@/redux-cake/taskSlice/environmentsSlice";
import { useCreateDefaultGoals } from "@/redux-cake/taskSlice/goalsSlice";
import { useCreateDefaultOrganizations } from "@/redux-cake/taskSlice/organizationsSlice";
import { useCreateDefaultProjects } from "@/redux-cake/taskSlice/projectsSlice";
import { useCreateDefaultTags } from "@/redux-cake/taskSlice/tagsSlice";
import { useCreateDefaultTodos } from "@/redux-cake/taskSlice/todosSlice";
import { getIds } from "@/utils/getIds";

export function useGenerateDefaults() {
  // Default organizations
  const [createDefaultOrganization, { isLoading: isCreatingOrganiztions }] =
    useCreateDefaultOrganizations();
  // Default todos
  const [createDefaultTodos, { isLoading: isCreatingDefaultTodos }] =
    useCreateDefaultTodos();
  // Default projects
  const [createDefaultProjects, { isLoading: isCreatingDefaultProjects }] =
    useCreateDefaultProjects();
  // Default environments
  const [
    createDefaultEnvironments,
    { isLoading: isCreatingDefaultEnvironments },
  ] = useCreateDefaultEnvironments();
  // Default Goals
  const [createDefaultGoals, { isLoading: isCreatingDefaultGoals }] =
    useCreateDefaultGoals();
  // Default tags
  const [createDefaultTags, { isLoading: isCreatingDefaultTags }] =
    useCreateDefaultTags();

  const isCreatingDefaults = [
    isCreatingOrganiztions,
    isCreatingDefaultTags,
    isCreatingDefaultGoals,
    isCreatingDefaultTodos,
    isCreatingDefaultProjects,
    isCreatingDefaultEnvironments,
  ].every(Boolean);

  async function startGeneratingDefaults({ id }: { id: string }) {
    // =========== Creating default organiztions
    const organiztionData = await createDefaultOrganization({
      userId: id,
    }).unwrap();

    // =========== Creating default todos

    const data = await createDefaultTodos({
      userId: id,
    }).unwrap();

    // This functions returns an array of ids
    const onlineshopIds = getIds(data?.onlineshopData);
    const gettingFamiliarIds = getIds(data?.gettingFamiliarData);

    // =========== Creating default projects

    const projectsData = await createDefaultProjects({
      userId: id,
      gettingFamiliarIds,
      onlineshopIds,
    }).unwrap();
    const projectIds = getIds(projectsData);

    // =========== Creating default goals
    const goalsData = await createDefaultGoals({
      userId: id,
      projectIds,
    }).unwrap();

    const goalIds = getIds(goalsData);

    // =========== Creating default tags
    const tagsData = await createDefaultTags({ userId: id, goalIds }).unwrap();

    // =========== Creating default environments
    const environmentsData = await createDefaultEnvironments({
      userId: id,
      projectIds,
    }).unwrap();

    return {
      numProjectsCreated: projectsData.length,
      numTodosCreated: 4 + 5,
      numEnvironmentsCreated: environmentsData.length,
      numTagsCreated: tagsData.length,
      numGoalsCreated: goalsData.length,
      numOrganizationsCreated: organiztionData.length,
    };
  }

  return { isCreatingDefaults, startGeneratingDefaults };
}
