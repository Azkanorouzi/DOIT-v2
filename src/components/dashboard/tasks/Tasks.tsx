import { ReactNode, createContext, useState } from "react";
import { Environment } from "./Environments/Environment";
import TaskNumber from "./TaskNumber";
import EditButtons from "./EditButtons";
import EditMenuButton from "./EditMenuButton";

export const TaskContext = createContext(null);

interface TasksProps {
  children: ReactNode;
  type: "environment" | "goal" | "project" | "tag";
}

export default function Tasks({ children, type }: TasksProps) {
  const [editOpen, setEditOpen] = useState<string>("");
  const [selected, setSelected] = useState<string>("today");
  return (
    <TaskContext.Provider
      value={{ editOpen, setEditOpen, selected, setSelected, type }}
    >
      {children}
    </TaskContext.Provider>
  );
}

// Environments
Tasks.Environment = Environment;
Tasks.TaskNumber = TaskNumber;
Tasks.EditButtons = EditButtons;
Tasks.EditMenuButton = EditMenuButton;
