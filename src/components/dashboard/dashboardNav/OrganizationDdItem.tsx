import { IconRenderer } from "@/components/ui/IconRenderer";
import { Organization } from "@/utils/definitions";
import { DropdownMenuItem } from "@radix-ui/react-dropdown-menu";
import { ReactNode } from "react";
import { FaDragon, FaPen } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
import { GrUserAdmin } from "react-icons/gr";
import { useNavigate, useParams } from "react-router-dom";
import useCurrentUser from "@/hooks/useCurrentUser";

export default function OrganizationDdItem({
  organization,
  logo,
}: {
  organization: Organization;
  logo?: ReactNode;
}) {
  const { mode, container, organization: curOrganization } = useParams();
  const navigate = useNavigate();
  const { id } = useCurrentUser();

  const Icon = !logo ? IconRenderer({ iconName: organization?.logo }) : logo;
  // ===== Checking user access
  const haveReadAccess = organization?.read.includes(id);
  const haveWriteAccess = organization?.write.includes(id);
  const haveAdminAccess = organization?.admin.includes(id);

  return (
    <DropdownMenuItem
      className={`cursor-pointer flex items-center pl-1 ${curOrganization?.toLowerCase() === organization?.name?.toLowerCase() ? "text-primary" : ""} justify-between gap-10 pl-3 pr-3 mb-2`}
      onClick={() => {
        let url = "/dashboard";
        url += `/${organization?.name?.toLowerCase()}`;
        if (mode) url += `/${mode}`;
        if (container) url += `/${container}`;
        navigate(url);
      }}
    >
      {/* Name and logo */}
      <div className="flex gap-2 justify-between items-center">
        <span>{Icon || <FaDragon />}</span>
        <span>{organization?.name}</span>
      </div>
      {/* Status icons  */}
      <div className="flex gap-2">
        {haveReadAccess && <IoEyeSharp />}
        {haveWriteAccess && <FaPen className={`w-3 h-3`} />}
        {haveAdminAccess && <GrUserAdmin />}
      </div>
    </DropdownMenuItem>
  );
}
