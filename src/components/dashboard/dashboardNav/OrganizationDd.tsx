import DropDownComplete from "@/components/ui/DropDownComplete";
import useCurrentUser from "@/hooks/useCurrentUser";
import { Organization } from "@/utils/definitions";
import { FaPerson } from "react-icons/fa6";
import { SlOrganization } from "react-icons/sl";
import OrganizationDdItem from "./OrganizationDdItem";
import LoaderSmall from "@/components/ui/LoaderSmall";
import { useCurOrganization } from "@/contexts/OrganizationContext";

export default function OrganizationDd() {
  const { id } = useCurrentUser();
  const { organizations, isLoadingOrganization } = useCurOrganization();

  return (
    <DropDownComplete
      trigger={
        <div className="flex items-center justify-center hover:text-primary gap-5">
          <SlOrganization />
          <p>Organiztion</p>
        </div>
      }
      title="Organization"
    >
      {isLoadingOrganization && (
        <div className="p-5 flex justify-center items-center">
          <LoaderSmall />
        </div>
      )}
      {/* ====== Default organization */}
      <OrganizationDdItem
        logo={<FaPerson />}
        organization={{
          name: "Personal",
          description: "A place for your personal work",
          logo: "",
          creator: id,
          read: [id],
          write: [id],
          admin: [id],
          participants: [],
          id: "",
        }}
        key={"123"}
      />

      {/* ====== Loaded organization */}
      {organizations?.map((organization: Organization) => {
        return (
          <OrganizationDdItem
            organization={organization}
            key={organization.id}
          />
        );
      })}
    </DropDownComplete>
  );
}
