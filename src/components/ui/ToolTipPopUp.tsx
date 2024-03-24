import { motion } from 'framer-motion'
import { FaInfoCircle } from 'react-icons/fa'
import { IoIosWarning } from 'react-icons/io'
import { MdDangerous } from 'react-icons/md'

export default function ToolTipPopUp({
  type = 'info',
  text,
}: {
  type?: 'info' | 'danger' | 'warning'
  text: string
}) {
  // Icon
  const icon =
    type === 'info' ? (
      <FaInfoCircle />
    ) : type === 'danger' ? (
      <MdDangerous />
    ) : (
      <IoIosWarning />
    )

  const color = type === 'info' ? 'primary-foreground' : 'primary'

  return (
    <motion.p
      className={`border border-${color} mb-2 text-${color} flex items-center justify-center px-5 py-2 gap-1 z-20 rounded-xl text-[12px] backdrop-blur-xl `}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {icon}
      {text}
    </motion.p>
  )
}
