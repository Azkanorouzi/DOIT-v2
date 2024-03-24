import { FaUserCircle } from 'react-icons/fa'
import LogoutButton from '../ui/LogoutBtn'
import { motion } from 'framer-motion'
import ToolTipContainer from '../ui/ToolTipContainer'
import ToolTipPopUp from '../ui/ToolTipPopUp'

export default function UserCard({ data }) {
  return (
    <motion.article
      className="z-10 absolute top-[290px] left-[180px] flex justify-center items-center gap-8 p-5 rounded-xl backdrop-blur-md border shadow-sm pr-20"
      whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
      initial={{ opacity: 0.2, translateX: -100 }}
      animate={{ opacity: 1, translateX: 0 }}
      transition={{ duration: 0.4 }}
    >
      <ToolTipContainer
        text={<ToolTipPopUp text="Change your profile picture" />}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0.5 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.4 }}
        >
          <FaUserCircle className="w-20 h-20 rounded-full text-primary hover:text-primary-foreground transition-colors cursor-pointer" />
        </motion.div>
      </ToolTipContainer>
      <div>
        <motion.p
          className="text-2xl text-primary"
          initial={{ translateY: '10px', opacity: 0.5 }}
          animate={{ translateY: '0px', opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.6 }}
        >
          {data?.username}
        </motion.p>
        <motion.p
          initial={{ translateY: '10px', opacity: 0.5 }}
          animate={{ translateY: '0px', opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.8 }}
        >
          {data?.email}
        </motion.p>
        {/* Todo */}
        <motion.p
          className="text-primary"
          initial={{ translateY: '10px', opacity: 0.5 }}
          animate={{ translateY: '0px', opacity: 1 }}
          transition={{ duration: 0.4, delay: 1 }}
        >
          Account Type: Normal
        </motion.p>
      </div>

      <div className="self-bottom pt-7">
        <LogoutButton />
      </div>
    </motion.article>
  )
}
