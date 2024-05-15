import { FaUser } from 'react-icons/fa'
import { MdSpaceDashboard } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import ImagePicker from '../ui/ImagePicker'
import { AiFillPicture } from 'react-icons/ai'
import MotionButton from '../ui/MotionButton'
import ChangeDescription from './ChangeDescription'
import NewPasswordButton from './NewPasswordButton'

export default function ProfileButtons() {
  const navigate = useNavigate()
  return (
    <div className="gap-5 flex flex-col ">
      <div className="gap-5 flex flex-col text-center lg:text-left lg:flex-row">
        <ChangeDescription />
        <ImagePicker text="Change profile" icon={<FaUser />} />
        <ImagePicker
          text="Change background"
          icon={<AiFillPicture />}
          type="background"
          delay={1.5}
        />
      </div>
      <div className="flex gap-5 flex-col lg:flex-row lg:items-start">
        <MotionButton
          className="bg-secondary border border-primary text-primary flex gap-2 hover:text-secondary"
          initial={{ scale: 0.9, opacity: 0.1 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.3 }}
          onClick={() => {
            navigate('/dashboard')
          }}
        >
          {' '}
          <MdSpaceDashboard /> Go to dashboard
        </MotionButton>

        <NewPasswordButton />
      </div>
    </div>
  )
}
