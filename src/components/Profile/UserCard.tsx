import { FaUserCircle } from 'react-icons/fa'
import LogoutButton from '../ui/LogoutBtn'
import { motion } from 'framer-motion'

export default function UserCard({ data }) {
  return (
    <motion.article
      className="z-10 absolute top-[290px] left-[180px] flex justify-center items-center gap-8 p-5 rounded-xl backdrop-blur-md border shadow-sm pr-20"
      whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
      initial={{ opacity: 0.2, translateX: -100 }}
      animate={{ opacity: 1, translateX: 0 }}
      transition={{ duration: 0.4 }}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0.5 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.4 }}
      >
        <FaUserCircle className="w-20 h-20 rounded-full text-primary hover:text-primary-foreground transition-colors cursor-pointer" />
      </motion.div>
      <div>
        <motion.p className="text-2xl text-primary" animate={{}}>
          {data?.username}
        </motion.p>
        <p>{data?.email}</p>
        {/* Todo */}
        <p className="text-primary">Account Type: Normal</p>
      </div>

      <div className="self-bottom pt-7">
        <LogoutButton />
      </div>
    </motion.article>
  )
}
