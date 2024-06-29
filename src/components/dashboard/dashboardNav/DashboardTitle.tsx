import { IconRenderer } from "@/components/ui/IconRenderer";
import LoaderSmall from "@/components/ui/LoaderSmall";
import { useCurContainer } from "@/contexts/ContainerContext";
import { useCurOrganization } from "@/contexts/OrganizationContext";
import { PersonIcon } from "@radix-ui/react-icons";
import { FaDragon } from "react-icons/fa";
import { useParams } from "react-router-dom";

export default function DashboardTitle() {
  const { curContainerName } = useCurContainer();
  const { mode } = useParams();
  const { curOrganization, curOrganizationData, isLoadingOrganization } =
    useCurOrganization();
  console.log(curOrganizationData);
  const logo = curOrganizationData?.length ? (
    IconRenderer({ iconName: curOrganizationData[0]?.logo ?? null }) ?? (
      <FaDragon />
    )
  ) : (
    <PersonIcon />
  );

  return (
    <p className="flex items-center gap-1">
      <span>{isLoadingOrganization ? <LoaderSmall /> : logo}</span>
      <span>{curOrganization?.toUpperCase()} / </span>{" "}
      <span className="text-primary">{mode?.toUpperCase() + " "}</span>/
      {String(curContainerName?.toUpperCase() ?? "")}
    </p>
  );
}
