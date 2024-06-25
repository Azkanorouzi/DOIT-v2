import { CgProfile } from "react-icons/cg";
import { IoIosColorPalette } from "react-icons/io";
import { IconType } from "react-icons/lib";
import { IoMdDoneAll } from "react-icons/io";
import { LuHome } from "react-icons/lu";
import {
  FaBox,
  FaDumbbell,
  FaExclamation,
  FaLeaf,
  FaRegCalendarCheck,
  FaStar,
  FaSun,
} from "react-icons/fa";
import { FaRunning } from "react-icons/fa";
import { IoBookSharp } from "react-icons/io5";
import { RiInboxArchiveFill } from "react-icons/ri";
import { MdNotificationImportant, MdWork } from "react-icons/md";

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
  starred: { component: FaStar, name: "star" },
  inbox: { component: RiInboxArchiveFill, name: "inbox" },
  upcoming: { component: FaRegCalendarCheck, name: "calendar" },
  someday: { component: FaBox, name: "anytime" },
  important: { component: FaExclamation, name: "Important" },
  passed: { component: MdNotificationImportant, name: "passed" },
  today: { component: FaSun, name: "today" },
  work: { component: MdWork, name: "work" },
  dumbbell: { component: FaDumbbell, name: "dumbell" },
};

// This function will take in a icon component name like COMPONENT:CgProfile and it render it
export const IconRenderer = ({
  iconName,
  className,
}: {
  iconName: string;
  className?: string;
}) => {
  const extractedName = iconName.includes(":")
    ? iconName.slice(iconName.indexOf(":") + 1)
    : iconName;
  console.log(extractedName, "extractedName");
  const IconComponent = iconMap[extractedName]?.component;

  if (!IconComponent) {
    return null; // or render a default icon or error message
  }

  return <IconComponent className={className} />;
};
