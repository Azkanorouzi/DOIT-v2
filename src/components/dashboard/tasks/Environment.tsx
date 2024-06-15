import { IconRenderer } from "@/components/ui/IconRenderer";
import { specialEnvironments } from "@/utils/definitions";
import { ReactNode, useContext } from "react";
import { CgMenuRight } from "react-icons/cg";
import { TaskContext } from "./Tasks";
import { useTheme } from "@/contexts/ThemeContext";

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
  const { selected, setSelected } = useContext(TaskContext);
  // Changing the theme for environments so that the text is visible
  const { theme } = useTheme();
  const activeBgColor =
    theme !== "focus" && theme !== "earth"
      ? "bg-primary"
      : "bg-primary text-black";
  const activeClass = `w-full ${activeBgColor} border-primary`;
  const isActive = id === selected || type === selected;

  const renderedIcon = IconRenderer({
    iconName: icon ? icon : type,
    className: "text-2xl mr-3",
  });
  return (
    <article className="flex gap-2 relative">
      <button
        className={` border-l z-10  rounded-r-full border-b p-3 rounded-xl flex justify-between hover:border-primary transition-color hover:bg-primary hover:text-white items-center ${isActive ? activeClass : `bg-secondary w-[68%] border-${typeColors[type]} `}`}
        style={{ transition: "width .3s" }}
        onClick={() => {
          setSelected(id.length ? id : type);
        }}
      >
        <div className="flex">
          {renderedIcon || <i className="fa-solid fa-dragon mr-3"></i>}
          <strong
            className={`${theme === "earth" || theme === "focus" ? (isActive ? "text-card" : "text-white") : "text-white"}`}
          >
            {name}
          </strong>
        </div>

        {isActive && (
          <div>
            <CgMenuRight className="rotate-180 text-2xl hover:scale-125 hover:rotate-[360] transition-transform" />
            {/* <button> */}
            {/*   {" "} */}
            {/*   <FaQuestion />{" "} */}
            {/* </button> */}
            {/* <button> */}
            {/*   <TiDelete /> */}
            {/* </button> */}
            {/* <button> */}
            {/*   <FaPen /> */}
            {/* </button> */}
          </div>
        )}
      </button>

      <div className="flex gap-3 absolute right-0 items-center justify-center bottom-0 top-0">
        {children}
      </div>
    </article>
  );
};
