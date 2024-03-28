import { motion } from 'framer-motion'
import { Button } from '../ui/button'
import { FaUser } from 'react-icons/fa'
import { MdDescription, MdSpaceDashboard } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import ImagePicker from '../ui/ImagePicker'
import { AiFillPicture } from 'react-icons/ai'

const MotionButton = motion(Button, { forwardMotionProps: true })

export default function ProfileButtons() {
  const navigate = useNavigate()
  return (
    <div className="gap-5 flex flex-col ">
      <div className="gap-5 flex flex-col text-center lg:text-left lg:flex-row">
        <MotionButton
          className=" flex gap-2"
          initial={{ scale: 0.9, opacity: 0.1 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          <MdDescription />
          Change Description
        </MotionButton>
        <ImagePicker text="Change profile" icon={<FaUser />} />
        <ImagePicker
          text="Change background"
          icon={<AiFillPicture />}
          style="  text-primary flex gap-2 hover:text-secondary text-primary"
          type="background"
        />
      </div>
      <div className="flex gap-5 flex-col">
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
      </div>
    </div>
  )
}
