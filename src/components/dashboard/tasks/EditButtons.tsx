import { useContext } from "react";
import { TiDelete } from "react-icons/ti";
import { FaPen, FaQuestion } from "react-icons/fa";
import { TaskContext } from "./Tasks";

export default function EditButtons({ id }: { id: string }) {
  // Need type to render different icons based on the type of task
  const { editOpen } = useContext(TaskContext);
  const editCloseClass = "opacity-0 blur-xl";
  const editOpenClass = "opacity-1 blur-0";
  const editClass = editOpen !== id ? editCloseClass : editOpenClass;
  return (
    <>
      {/* TODO: delete button  */}
      <button className={`transition-all ${editClass} text-xl`}>
        {" "}
        <TiDelete />
      </button>

      {/* TODO: move button (Not for Environment) */}
      {/* {type !== "environment" && <button></button>} */}

      {/* TODO: update button  */}
      <button className={`transition-all ${editClass} text-xl`}>
        <FaPen />
      </button>

      {/* info button  */}
      <button className={`transition-all ${editOpenClass}`}>
        <FaQuestion />
      </button>
    </>
  );
}
