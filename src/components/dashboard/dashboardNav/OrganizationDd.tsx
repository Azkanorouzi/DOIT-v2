import DropDownComplete from '@/components/ui/DropDownComplete'
import { DropdownMenuItem } from '@/components/ui/dropdown-menu'
import { SlOrganization } from 'react-icons/sl'

export default function OrganizationDd() {
  return (
    <div className="flex gap-3 justify-center items-center hover:text-primary">
      <SlOrganization />
      <DropDownComplete trigger="organizations">
        <DropdownMenuItem className="cursor-pointer">personal</DropdownMenuItem>
      </DropDownComplete>
    </div>
  )
}
