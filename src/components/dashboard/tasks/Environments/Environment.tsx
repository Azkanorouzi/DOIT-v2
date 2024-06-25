import { IconRenderer } from "@/components/ui/IconRenderer";
import { specialEnvironments } from "@/utils/definitions";
import { ReactNode, useContext } from "react";
import Tasks, { TaskContext } from "../Tasks";
import { useTheme } from "@/contexts/ThemeContext";
import { motion } from "framer-motion";
import { useCurContainer } from "@/contexts/ContainerContext";
import { useNavigate } from "react-router-dom";
import { useCurOrganization } from "@/contexts/OrganizationContext";

type TypeColors = {
  [key in specialEnvironments]: string; // You can change `string` to any type you need
};

// Color mapper
const typeColors: TypeColors = {
  passed: "indigo",
  normal: "white",
  important: "red",
  someday: "lime",
  inbox: "cyan",
  starred: "yellow",
  upcoming: "blue",
  today: "yellow-light",
};
// ====================================
export const Environment = ({
  type = "normal",
  name = "DOIT",
  icon = "",
  id = "",
  children,
}: {
  type?: specialEnvironments;
  name?: string;
  icon?: string;
  id?: string;
  children: ReactNode;
}) => {
  const navigate = useNavigate();
  const { setCurContainerId } = useCurContainer();
  const { selected, setSelected, editOpen, setEditOpen } =
    useContext(TaskContext);
  const { curOrganization } = useCurOrganization();
  // Changing the theme for environments so that the text is visible
  const { theme } = useTheme();
  // ================= Classes
  const activeBgColor =
    theme !== "focus" && theme !== "earth"
      ? "bg-primary"
      : "bg-primary text-black";
  const activeClass = `w-[200px] ${activeBgColor} border-primary`;
  // ================= isActive
  const isActive = id === selected || type === selected;
  const isEditOpen =
    (editOpen === id && editOpen.length) ||
    (editOpen === type && editOpen.length);
  // ================= Animation
  const envItem = {
    hidden: { opacity: 0, filter: "blur(10px)", transform: "scale(.7)" },
    show: { opacity: 1, filter: "blur(0px)", transform: "scale(1)" },
    unBlurred: { filter: "blur(0px)", transfrom: "scale(1)" },
  };

  const renderedIcon = IconRenderer({
    iconName: icon ? icon : type,
    className: "text-2xl mr-3",
  });
  return (
    <motion.article className="flex gap-2 relative" variants={envItem}>
      <button
        className={` border-l z-10  rounded-r-full border-b p-3 rounded-xl flex justify-between hover:border-primary transition-color hover:bg-primary hover:text-white items-center transition-all  ${isEditOpen ? "rounded-l-full w-[50px] bg-primary" : `${isActive ? activeClass : `bg-secondary  border-${typeColors[type]} w-[170px]`}`}`}
        style={{ transition: "all .3s" }}
        onClick={() => {
          setSelected(id.length ? id : type);
          setEditOpen("");
          id && setCurContainerId(id);
          navigate(`/dashboard/${curOrganization}/todo/${name}`);
        }}
      >
        <div className="flex">
          {renderedIcon || <i className="fa-solid fa-dragon mr-3"></i>}
          <strong
            className={`${theme === "earth" || theme === "focus" ? (isActive ? "text-card" : "text-white") : "text-white"} transition-all ${isEditOpen ? "opacity-0 absolute -z-10" : ""}`}
          >
            {name}
          </strong>
        </div>

        {isActive && <Tasks.EditMenuButton id={id.length ? id : type} />}
      </button>

      <div className="flex gap-3 absolute right-0 items-center justify-center bottom-0 top-0">
        {children}
      </div>
    </motion.article>
  );
};
