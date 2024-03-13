import { FaDragon } from 'react-icons/fa'
import { motion } from 'framer-motion'

export default function LoaderBig() {
  return (
    <div className="w-screen h-screen fixed z-50 grid place-content-center text-[10rem] bg-black bg-opacity-70 backdrop-blur-sm text-primary loaderBig hidden">
      <motion.div
        initial={{ opacity: 0.5, filter: 'blur(1px)' }}
        animate={{ opacity: 1, filter: 'blur(0px)' }}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatType: 'mirror',
        }}
      >
        <FaDragon />
      </motion.div>
    </div>
  )
}
