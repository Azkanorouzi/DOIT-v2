import { useParams } from "react-router-dom";
import Environments from "../tasks/Environments";

export default function DashboardExplorer() {
  const { mode } = useParams();
  return (
    <nav className="shadow-primary shadow-md row-start-1 col-start-2 col-end-6 row-end-13 flex flex-col gap-5 px-5 py-4">
      {mode === "todo" && <Environments />}
    </nav>
  );
}
