import { useCurContainer } from "@/contexts/ContainerContext";
import { useParams } from "react-router-dom";

export default function DashboardTitle() {
  const { curContainerName } = useCurContainer();
  const { mode } = useParams();
  return (
    <p>
      {" "}
      <span className="text-primary">{mode?.toUpperCase() + " "}/</span>
      {" " + curContainerName?.toUpperCase()}
    </p>
  );
}
