import { motion } from "framer-motion";
import { useState } from "react";
import DashboardNavLink from "./dashboardNav/DashboardNavLink";
import { FaChartSimple, FaGear, FaPeopleGroup } from "react-icons/fa6";
import { FaDollarSign, FaMedal } from "react-icons/fa";
import { GoGoal } from "react-icons/go";
import { SlCalender } from "react-icons/sl";
import { IoIosTimer } from "react-icons/io";
import { MdDoneAll } from "react-icons/md";
import { useParams, useSearchParams } from "react-router-dom";
import { useCurOrganization } from "@/contexts/OrganizationContext";

export default function DashboardSideBar() {
  const { curOrganization } = useCurOrganization();
  const { mode } = useParams();
  const [searchParam] = useSearchParams();

  const [hovered, setHovered] = useState(false);
  const isMedalOpen = searchParam.get("medalModal") === "open";
  const isFriendsOpen = searchParam.get("friendsModal") === "open";
  const isSettingsOpen = searchParam.get("settingsModal") === "open";

  return (
    <motion.aside
      className={`col-span-1 row-span-12 z-20  h-screen flex transition-transform  bg-secondary border-r border-primary overflow-hidden text-muted-foreground`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ width: "180px" }}
      layout
    >
      <nav className="h-full flex flex-col justify-between px-4 py-6  w-[180px]">
        <DashboardNavLink hovered={hovered} linkTo="/" active={!mode} />

        <div className="flex flex-col gap-5">
          <DashboardNavLink
            icon={<MdDoneAll />}
            linkTo={`/dashboard/${curOrganization}/todo/today`}
            hovered={hovered}
            text="Todos"
            active={mode === "todo"}
          />
          <DashboardNavLink
            icon={<FaChartSimple />}
            linkTo={`/dashboard/${curOrganization}/charts`}
            hovered={hovered}
            text="Charts"
            active={mode === "charts"}
          />
          <DashboardNavLink
            icon={<SlCalender />}
            linkTo={`/dashboard/${curOrganization}/calendar`}
            hovered={hovered}
            text="Calendar"
            active={mode === "calendar"}
          />
          <DashboardNavLink
            icon={<GoGoal />}
            linkTo={`/dashboard/${curOrganization}/goals`}
            hovered={hovered}
            text="Goals"
            active={mode === "goals"}
          />
          <DashboardNavLink
            icon={<IoIosTimer />}
            linkTo={`/dashboard/${curOrganization}/timer`}
            hovered={hovered}
            text="timer"
            active={mode === "timer"}
          />
          <DashboardNavLink
            icon={<FaDollarSign />}
            linkTo={`/dashboard/${curOrganization}/finance`}
            hovered={hovered}
            text="Finance"
            active={mode === "finance"}
          />
        </div>

        <div className="flex gap-5 flex-col  border-primary">
          <DashboardNavLink
            icon={<FaMedal />}
            linkTo={`?medalModal=open`}
            hovered={hovered}
            text="Medal"
            active={isMedalOpen}
          />
          <DashboardNavLink
            icon={<FaPeopleGroup />}
            text="Friends"
            linkTo={`?friendsModal=open`}
            hovered={hovered}
            active={isFriendsOpen}
          />
          <DashboardNavLink
            hovered={hovered}
            linkTo="?settingsModal=open"
            icon={<FaGear />}
            text="Settings"
            active={isSettingsOpen}
          />
        </div>
      </nav>
    </motion.aside>
  );
}
