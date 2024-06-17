import { useContext } from "react";
import { TaskContext } from "./Tasks";
import { specialEnvironments } from "@/utils/definitions";

export default function TaskNumber({ id }: { id: specialEnvironments }) {
  const { selected } = useContext(TaskContext);
  return (
    <p
      className={`w-8 border border-primary rounded-full h-8 flex justify-center items-center text-center transition-all ${selected === id ? "scale-110 bg-primary" : ""}`}
    >
      22
    </p>
  );
}
