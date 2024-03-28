import { IoMdDoneAll } from 'react-icons/io'
import InfoBox from '../ui/InfoBox'
import { TfiTarget } from 'react-icons/tfi'
import { FaGem, FaUserFriends } from 'react-icons/fa'
import { SlOrganization } from 'react-icons/sl'
import { LuCrown } from 'react-icons/lu'

export default function ProfileBoxes() {
  return (
    <div className=" mt-10 lg:mt-36 lg:ml-36   flex gap-5 flex-row lg:flex-col pb-10">
      <div className="z-10 flex gap-5 flex-col lg:flex-row">
        {/* box */}
        <InfoBox
          amount="0"
          icon={<IoMdDoneAll className="text-5xl" />}
          text="Done"
          animationDelay={0.3}
        />
        {/* box */}
        <InfoBox
          amount="0m"
          icon={<TfiTarget className="text-4xl" />}
          text="Focused"
          style="border-primary-foreground text-primary-foreground"
          animationDelay={0.7}
        />
        {/* box */}
        <InfoBox
          amount="0"
          icon={<FaGem className="text-4xl" />}
          text="Gem"
          style="border-destructive text-primary"
          animationDelay={0.5}
        />
      </div>
      <div className="flex gap-5 z-10 flex-col lg:flex-row">
        {/* box */}
        <InfoBox
          amount="0"
          icon={<FaUserFriends className="text-5xl" />}
          text="Connections"
          style="border-none bg-primary text-primary-foreground"
          animationDelay={0.1}
        />
        {/* box */}
        <InfoBox
          amount="0"
          icon={<SlOrganization className="text-5xl" />}
          text="Organizations"
          style="border-none text-primary bg-primary-foreground"
          animationDelay={0.8}
        />
        {/* box */}
        <InfoBox
          amount="0"
          icon={<LuCrown className="text-4xl " />}
          text="Rank"
          style="border-none text-primary-foreground bg-destructive"
          animationDelay={1.1}
        />
      </div>
    </div>
  )
}
