import { useContext } from "react";
import { CgMenuRight } from "react-icons/cg";
import { TaskContext } from "./Tasks";

export default function EditMenuButton({ id }: { id: string }) {
  const { setEditOpen, editOpen } = useContext(TaskContext);
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        setEditOpen((open: string) => (open !== id ? id : ""));
      }}
      className={`${editOpen === id ? "translate-x-8 rotate-180" : ""} transition-all`}
    >
      <CgMenuRight className="rotate-180 text-2xl hover:scale-125 hover:rotate-[360] transition-transform" />
    </button>
  );
}
