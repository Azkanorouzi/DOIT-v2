type state = "pending" | "done" | "undone";
type priority = 1 | 2 | 3 | 4 | 5;
type goalType = "long-term" | "short-term" | "timeless";

export interface User {
  sub: string;
  desc: string;
  email: string;
  profile: string;
  background: string;
  email_verified: boolean;
  phone_verified: boolean;
}

export interface Environment {
  id?: string;
  // See if this must be something else ...
  user_id: string;
  title: string;
  description: string;
  created_at?: Date | string | null;
  icon: string;
  project_ids: string[];
  todo_ids: string[];
  organization_id: string;
}

export interface Project {
  id?: string;
  user_id: string;
  goal_id: string | null;
  title: string;
  description: string;
  state: "pending" | "done" | "undone";
  priority: priority;
  deadline?: Date | null | string;
  progress: number;
  todo_ids: string[];
  collab_ids: string[];
  icon: string;
  starred: boolean;
}

export interface Todo {
  goal_id: string | null;
  id?: string;
  user_id: string;
  title: string;
  description: string;
  state: state;
  priority: priority;
  deadline?: Date | null | string;
  created_at?: Date;
  icon: string;
  starred: boolean;
  duration: string;
  subtodos_id: string[];
}

export interface Subtodos {
  id?: string;
  todo_id: string;
  title: string;
  state: state;
}

export interface Tags {
  id?: string;
  user_id: string;
  title: string;
  description: string;
  icon: string;
  goal_ids: string[];
  created_at?: Date | null | string;
  organization_id: string;
}

export interface Goal {
  id?: string;
  user_id: string;
  title: string;
  description: string;
  type: goalType;
  project_ids: string[];
  todo_ids: string[];
  created_at?: Date | null | string;
}

export interface Organization {
  id?: string;
  name: string;
  creator: string;
  participants: string[];
  logo: string;
  description: string;
  read: string[];
  write: string[];
  admin: string[];
}

export interface ToastMessage {
  message: string;
  icon?: string;
}

export type specialEnvironments =
  | "normal"
  | "starred"
  | "today"
  | "upcoming"
  | "someday"
  | "inbox"
  | "passed"
  | "important";
