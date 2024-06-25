import {
  Environment,
  Goal,
  Organization,
  Project,
  Tags,
  Todo,
} from "@/utils/definitions";

//  (get user id and pass it to) Todos -> (default todos would create two arrays) Projects -> we pass in ids to Goal -> Environments we pass in all the previous ids to environments ids -> tags

// =========================== For getting the default projects
export const getDefaultProjects = ({
  userId,
  gettingFamiliarIds,
  onlineshopIds,
}: {
  gettingFamiliarIds: string[];
  onlineshopIds: string[];
  userId: string;
}): Project[] => {
  return [
    {
      icon: "fa fa-dragon",
      collab_ids: [],
      goal_id: null,
      user_id: userId,
      starred: false,
      title: "Getting familiar",
      description: "Let's get familiar with DOIT!",
      state: "pending",
      priority: 3,
      progress: 10,
      todo_ids: gettingFamiliarIds,
    },
    {
      goal_id: null,
      icon: "fa fa-dragon",
      collab_ids: [],
      user_id: userId,
      starred: true,
      title: "Building an onlineshop",
      description: "Builiding an onlineshop for an startup company",
      state: "undone",
      priority: 2,
      deadline: "2024-06-30T23:59:59+00:00",
      progress: 20,
      todo_ids: onlineshopIds,
    },
  ];
};

// =========================== For getting the default todos
export const getDefaultTodos = ({ userId }: { userId: string }): Todo[] => {
  return [
    {
      goal_id: null,
      subtodos_id: [],
      user_id: userId,
      starred: true,
      icon: "fa-solid fa-dragon",
      title: "Open doit",
      description: "Open the doit app",
      state: "done",
      priority: 2,
      duration: "",
    },
    {
      goal_id: null,
      subtodos_id: [],
      user_id: userId,
      starred: false,
      icon: "COMPONENT:CgProfile",
      title: "Complete your profile settings",
      description:
        "Change the description, profile image, prfile background and ...",
      state: "pending",
      priority: 4,
      duration: "9m",
    },
    {
      goal_id: null,
      subtodos_id: [],
      user_id: userId,
      starred: false,
      icon: "COMPONENT:IoIosColorPalette",
      title: "Change the theme to your liking",
      description:
        "Doit comes with a lot of themes, you can change the theme whenever you want by clicking on the theme button on the left top",
      state: "undone",
      priority: 1,
      duration: "",
    },
    {
      goal_id: null,
      subtodos_id: [],

      user_id: userId,
      starred: false,
      icon: "COMPONENT:IoMdDoneAll",
      title: "Add a todo by hitting the plus button, bottom right corner",
      description: "Create a new todo",
      state: "undone",
      priority: 4,
      duration: "",
    },
    {
      goal_id: null,
      subtodos_id: [],
      user_id: userId,
      starred: false,
      icon: "COMPONENT:GoProjectRoadmap",
      title: "Create a new project",
      description:
        "Add a project by first going inside an environment, hitting the plus button, on the button right corner, and choosing the projecct.",
      state: "undone",
      priority: 4,
      duration: "",
    },
    {
      goal_id: null,
      subtodos_id: [],

      user_id: userId,
      starred: false,
      icon: "COMPONENT:GoProjectRoadmap",
      title: "Create a new top-level project",
      description:
        "Projects can also be created on the side bar, on the right bottom corner of the side bar click the plus sign and add the project, or just check the top-level checkbox",
      state: "undone",
      priority: 3,
      duration: "",
    },
    {
      goal_id: null,
      subtodos_id: [],

      user_id: userId,
      starred: false,
      icon: "COMPONENT:GoProjectRoadmap",
      title: "Create a new environment",
      description:
        "Create a new environment to contain projects and todos, thing of environment as a class of work to catagorize your tasks, it's the largest task-entity in DOIT",
      state: "undone",
      priority: 4,
      duration: "",
    },
    {
      goal_id: null,
      subtodos_id: [],

      user_id: userId,
      starred: false,
      icon: "COMPONENT:LuHome",
      title: "Create a new environment",
      description:
        "Create a new environment to contain projects and todos, think of environment as a class of work to catagorize your tasks, it's the largest task-entity in DOIT",
      state: "undone",
      priority: 2,
      duration: "",
    },
    {
      goal_id: null,
      subtodos_id: [],

      user_id: userId,
      starred: false,
      icon: "COMPONENT:PiTargetFill",
      title: "Checkout Goals tab",
      description:
        "You can set up goals, and associate environments, projects, or even todos with certain goals",
      state: "undone",
      priority: 1,
      duration: "",
    },
    {
      goal_id: null,
      subtodos_id: [],

      user_id: userId,
      starred: false,
      icon: "COMPONENT:LuHome",
      title: "Create a new environment",
      description:
        "Create a new environment to contain projects and todos, thing of environment as a class of work to catagorize your tasks, it's the largest task-entity in DOIT",
      state: "undone",
      priority: 5,
      duration: "",
    },
  ];
};

export const getDefaultTodosShop = ({ userId }: { userId: string }): Todo[] => {
  return [
    {
      goal_id: null,
      subtodos_id: [],
      user_id: userId,
      starred: false,
      icon: "COMPONENT:FaShoppingCart",
      title: "Buy apple",
      description: "I love apples ...",
      state: "undone",
      priority: 2,
      duration: "",
    },
    {
      goal_id: null,
      subtodos_id: [],
      user_id: userId,
      starred: false,
      icon: "COMPONENT:FaShoppingCart",
      title: "Buy oranges",
      description: "I love oranges more than apples ...",
      state: "undone",
      priority: 4,
      duration: "9m",
    },
    {
      goal_id: null,
      subtodos_id: [],
      user_id: userId,
      starred: false,
      icon: "COMPONENT:FaShoppingCart",
      title: "Buy watermelon",
      description: "ewww i don't like watermelon",
      state: "undone",
      priority: 1,
      duration: "",
    },
    {
      goal_id: null,
      subtodos_id: [],
      user_id: userId,
      starred: false,
      icon: "COMPONENT:FaShoppingCart",
      title: "Go to store",
      description: "We must go there soon!",
      state: "pending",
      priority: 4,
      duration: "1h",
    },
  ];
};

export const getDefaultEnvironments = ({
  userId,
  projectIds,
}: {
  userId: string;
  projectIds: string[];
}): Environment[] => {
  return [
    {
      user_id: userId,
      title: "DOIT",
      description:
        "This is an example environment, we use environment to store related projects/todos",
      todo_ids: [],
      organization_id: null,
      project_ids: projectIds,
      icon: "fa-solid fa-dragon",
    },
    {
      user_id: userId,
      title: "Education",
      description: "Your School Stuff",
      organization_id: null,
      todo_ids: [],
      project_ids: [],
      icon: "fa-solid fa-book",
    },
  ];
};

export const getDefaultGoals = ({
  userId,
  projectIds,
}: {
  userId: string;
  projectIds: string[];
}): Goal[] => {
  return [
    {
      user_id: userId,
      title: "Learn doit",
      description: "I must learn doit to become more efficient in my work",
      type: "short-term",
      project_ids: projectIds,
      todo_ids: [],
    },
    {
      user_id: userId,
      title: "Learn web-development",
      description: "Learn web-devenlopment and become good at it",
      type: "long-term",
      project_ids: projectIds,
      todo_ids: [],
    },
  ];
};

export const getDefaultTags = ({ userId, goalIds }): Tags[] => {
  return [
    {
      user_id: userId,
      icon: "COMPONENT:IoBookSharp",
      goal_ids: goalIds,
      title: "Learning",
      description: "Learning a new thing?",
      organization_id: null,
    },
    {
      user_id: userId,
      icon: "COMPONENT:FaLeaf",
      goal_ids: goalIds,
      title: "Health",
      description: "Become more healthy with doit",
      organization_id: null,
    },
  ];
};

export const getDefaultOrganizations = ({ userId }): Organization[] => {
  return [
    {
      creator: userId,
      name: "Office",
      participants: [userId],
      read: [],
      write: [],
      admin: [],
      logo: "",
      description:
        "This is a test organization, you can use organizations to collaborate with people, every organization has a creator, the creator can give read write or admin access to the participants, admin participants can send invite to other collaborators to join the organiztion, by default you will userId",
    },
  ];
};
