import DropDownComplete from "@/components/ui/DropDownComplete";
import useCurrentUser from "@/hooks/useCurrentUser";
import { useGetUserOrganizations } from "@/redux-cake/taskSlice/organizationsSlice";
import { Organization } from "@/utils/definitions";
import { FaPerson } from "react-icons/fa6";
import { SlOrganization } from "react-icons/sl";
import OrganizationDdItem from "./OrganizationDdItem";
import LoaderSmall from "@/components/ui/LoaderSmall";

export default function OrganizationDd() {
  const { id } = useCurrentUser();
  const { data, isLoading } = useGetUserOrganizations({ userId: id });
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
      {isLoading && (
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
      />

      {/* ====== Loaded organization */}
      {data?.map((organization: Organization) => {
        console.log(organization.logo);
        return <OrganizationDdItem organization={organization} />;
      })}
    </DropDownComplete>
  );
}
