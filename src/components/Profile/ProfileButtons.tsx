import { motion } from 'framer-motion'
import { Button } from '../ui/button'
import { FaUser } from 'react-icons/fa'
import { MdDescription, MdSpaceDashboard } from 'react-icons/md'

import ImagePicker from '../ui/ImagePicker'

const MotionButton = motion(Button, { forwardMotionProps: true })

export default function ProfileButtons() {
  return (
    <div className="gap-5 flex flex-col ">
      <div className="gap-5 flex">
        <MotionButton
          className="bg-primary-foreground text-primary flex gap-2 hover:text-secondary"
          initial={{ scale: 0.9, opacity: 0.1 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          {' '}
          <FaUser />
          Change Profile
        </MotionButton>
        <MotionButton
          className=" flex gap-2"
          initial={{ scale: 0.9, opacity: 0.1 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          <MdDescription />
          Change Description
        </MotionButton>
        <ImagePicker />
      </div>
      <div>
        <MotionButton
          className="bg-secondary border border-primary text-primary flex gap-2 hover:text-secondary"
          initial={{ scale: 0.9, opacity: 0.1 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.1 }}
        >
          {' '}
          <MdSpaceDashboard /> Go to Dashboard
        </MotionButton>
      </div>
    </div>
  )
}
