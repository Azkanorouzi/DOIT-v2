import { FaDragon } from 'react-icons/fa'

import { motion } from 'framer-motion'
import { Button } from '../ui/button'
import { useNavigate } from 'react-router-dom'
import useCurrentUser from '@/hooks/useCurrentUser'

// Animated components using framer motion
const MotionButton = motion(Button, { forwardMotionProps: true })

export default function Home() {
  const { isAuthenticated } = useCurrentUser()
  const navigate = useNavigate()
  return (
    <div className="relative  overflow-hidden w-screen h-screen flex justify-center  max-w-[1800px] max-h[3000px]">
      <div className="flex gap-16 justify-center items-center  ">
        <motion.div
          initial={{ opacity: 0, filter: 'blur(10px)' }}
          animate={{ opacity: 1, filter: 'blur(0px)' }}
          transition={{ duration: 2 }}
        >
          <FaDragon className="text-[500px] dropshadow-primary " />
        </motion.div>
        <div className="z-20 flex gap-5 flex-col">
          <motion.h1
            className="text-9xl text-gradient-primary"
            initial={{ filter: 'blur(10px)', opacity: 0 }}
            animate={{ filter: 'blur(0px)', opacity: 1, skew: '-5deg' }}
            transition={{ duration: 1 }}
          >
            DOIT LIKE
            <br />A DRAGON
          </motion.h1>
          <motion.h2
            className="w-[600px] text-xl"
            initial={{ opacity: 0, translate: '-100px' }}
            animate={{ opacity: 1, translate: '0px' }}
            transition={{ delay: 0.5 }}
          >
            A powerful todo list, that allows you to assign work to your
            employees, organize your daily task into environments, projects, get
            the job done faster with your team, or on your own.
          </motion.h2>
          <div className="flex gap-4">
            <MotionButton
              className="bg-secondary text-primary hover:bg-primary hover:text-secondary home-btn-1"
              initial={{ scale: 0.9, opacity: 0.1 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.7 }}
              onClick={() => navigate('/about')}
            >
              How does it work?
            </MotionButton>
            {!isAuthenticated && (
              <MotionButton
                className="home-btn-2"
                initial={{ scale: 0.9, opacity: 0.1 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.9 }}
                onClick={() => navigate('/signup')}
              >
                Sign up
              </MotionButton>
            )}
            {!isAuthenticated && (
              <MotionButton
                className="bg-foreground text-primary hover:bg-muted home-btn-3"
                initial={{ scale: 0.9, opacity: 0.1 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1.1 }}
                onClick={() => navigate('/login')}
              >
                Login
              </MotionButton>
            )}
            {isAuthenticated && (
              <MotionButton
                className="bg-foreground text-primary hover:bg-muted home-btn-3"
                initial={{ scale: 0.9, opacity: 0.1 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1.1 }}
              >
                Dashboard
              </MotionButton>
            )}
          </div>
        </div>
      </div>

      <div className="w-[200vw]  h-screen bg-primary-transparent rotate-[165deg] absolute top-40 left-0  backdrop-blur-[4px] z-10 blur-3xl "></div>
    </div>
  )
}
