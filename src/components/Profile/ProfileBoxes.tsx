import { IoMdDoneAll } from 'react-icons/io'
import InfoBox from '../ui/InfoBox'
import { TfiTarget } from 'react-icons/tfi'
import { FaGem, FaUserFriends } from 'react-icons/fa'
import { SlOrganization } from 'react-icons/sl'
import { LuCrown } from 'react-icons/lu'

export default function ProfileBoxes() {
  return (
    <div className=" mt-36 ml-36  flex gap-5 flex-col pb-10">
      <div className="z-10 flex gap-5">
        {/* box */}
        <InfoBox
          amount="0"
          icon={<IoMdDoneAll className="text-5xl" />}
          text="Done"
        />
        {/* box */}
        <InfoBox
          amount="0m"
          icon={<TfiTarget className="text-4xl" />}
          text="Focused"
          style="border-primary-foreground text-primary-foreground"
        />
        {/* box */}
        <InfoBox
          amount="0"
          icon={<FaGem className="text-4xl" />}
          text="Gem"
          style="border-destructive text-primary"
        />
      </div>
      <div className="flex gap-5 z-10">
        {/* box */}
        <InfoBox
          amount="0"
          icon={<FaUserFriends className="text-5xl" />}
          text="Connections"
          style="border-none bg-primary text-primary-foreground"
        />
        {/* box */}
        <InfoBox
          amount="0"
          icon={<SlOrganization className="text-5xl" />}
          text="Organizations"
          style="border-none text-primary bg-primary-foreground"
        />
        {/* box */}
        <InfoBox
          amount="0"
          icon={<LuCrown className="text-4xl " />}
          text="Rank"
          style="border-none text-primary-foreground bg-destructive"
        />
      </div>
    </div>
  )
}
