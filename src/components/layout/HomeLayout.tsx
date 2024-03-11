import { motion } from 'framer-motion'
import Home from '../home/Home'

export default function HomeLayout() {
  return (
    <motion.div className="pt-24 flex justify-center">
      <Home />
    </motion.div>
  )
}
