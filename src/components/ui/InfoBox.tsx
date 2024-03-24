import { motion } from 'framer-motion'
import { ReactNode } from 'react'

export default function InfoBox({
  text,
  icon,
  amount,
  style,
  animationDelay = 0,
}: {
  text: string
  icon: ReactNode
  amount: string
  style?: string
  animationDelay?: number
}) {
  return (
    <motion.figure
      className={`text-primary p-5 flex justify-center items-center flex-col text-center rounded-xl w-36 backdrop-blur-md border border-primary cursor-pointer ${style}`}
      initial={{ opacity: 0.7, filter: 'blur(5px)', scale: 0.98 }}
      animate={{ opacity: 0.9, filter: 'blur(.5px)', scale: 1 }}
      transition={{ delay: animationDelay, duration: 0.4 }}
      whileHover={{
        opacity: 1,
        filter: 'blur(0px)',
        transition: { duration: 0.1, delay: 0.2 },
      }}
    >
      <div className="flex flex-col justify-center items-center ">
        {icon}
        <p>{text}</p>
      </div>
      <figcaption>{amount}</figcaption>
    </motion.figure>
  )
}
