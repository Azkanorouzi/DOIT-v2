import { useParams } from "react-router-dom";
import Environments from "../tasks/Environments";
import { motion } from "framer-motion";

export default function DashboardExplorer() {
  const { mode } = useParams();
  const navContainer = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.3 } },
  };
  return (
    <motion.nav
      className="shadow-primary shadow-md row-start-1 col-start-2 col-end-6 row-end-13 flex flex-col gap-5 pl-5 pr-2 py-4 overflow-y-scroll"
      variants={navContainer}
      initial="hidden"
      animate="show"
    >
      {mode === "todo" && <Environments />}
    </motion.nav>
  );
}
