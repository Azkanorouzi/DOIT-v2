import { CgProfile } from "react-icons/cg";
import { IoIosColorPalette } from "react-icons/io";
import { IconType } from "react-icons/lib";
import { IoMdDoneAll } from "react-icons/io";
import { LuHome } from "react-icons/lu";
import { FaLeaf } from "react-icons/fa";
import { FaRunning } from "react-icons/fa";
import { IoBookSharp } from "react-icons/io5";

// Interfaces
interface IconEntry {
  component: IconType;
  name: string;
}
interface IconMap {
  [key: string]: IconEntry;
}

const iconMap: IconMap = {
  CgProfile: { component: CgProfile, name: "profile" },
  IoIosColorPalette: { component: IoIosColorPalette, name: "themes" },
  IoMdDoneAll: { component: IoMdDoneAll, name: "todo" },
  luHome: { component: LuHome, name: "home" },
  FaLeaf: { component: FaLeaf, name: "health" },
  FaRunning: { component: FaRunning, name: "exercise" },
  IoBookSharp: { component: IoBookSharp, name: "book" },
};

// This function will take in a icon component name like COMPONENT:CgProfile and it render it
export const IconRenderer = ({ iconName }: { iconName: string }) => {
  const extractedName = iconName.slice(iconName.indexOf(":"));
  const IconComponent = iconMap[extractedName].component;

  if (!IconComponent) {
    return null; // or render a default icon or error message
  }

  return <IconComponent />;
};
