import { Button } from '../ui/button'
import { FaUser } from 'react-icons/fa'
import { MdDescription, MdSpaceDashboard } from 'react-icons/md'

export default function ProfileButtons() {
  return (
    <div className="gap-5 flex">
      <Button className="bg-primary-foreground text-primary flex gap-2 hover:text-secondary">
        {' '}
        <FaUser />
        Change Profile
      </Button>
      <Button className=" flex gap-2">
        <MdDescription />
        Change Description
      </Button>
      <Button className="bg-secondary border border-primary text-primary flex gap-2 hover:text-secondary">
        {' '}
        <MdSpaceDashboard /> Go to Dashboard
      </Button>
    </div>
  )
}
