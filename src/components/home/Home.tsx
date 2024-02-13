import React from 'react'
import { FaDragon } from 'react-icons/fa'

import { motion } from 'framer-motion'
import { Button } from '../ui/button'

export default function Home() {
  return (
    <div className="relative  overflow-hidden w-screen h-screen flex justify-center items-center">
      <div className="flex gap-16 justify-center items-center">
        <FaDragon className="text-[500px] dropshadow-primary" />
        <div className="z-20 flex gap-5 flex-col">
          <motion.h1
            className="text-9xl text-gradient-primary"
            initial={{ filter: 'blur(10px)', opacity: 0 }}
            animate={{ filter: 'blur(0px)', opacity: 1 }}
            transition={{ duration: 1 }}
          >
            DOIT LIKE
            <br />A DRAGON
          </motion.h1>
          <h2 className="w-[600px] text-xl">
            A powerful todo list, that allows you to assign work to your
            employees, organize your daily task into environments, projects, get
            the job done faster with your team, or on your own.
          </h2>
          <div className="flex gap-4">
            <Button className="bg-secondary text-primary hover:bg-primary hover:text-secondary">
              How does it work?
            </Button>
            <Button>Sign up / Log in</Button>
            <Button className="bg-foreground text-primary hover:bg-muted">
              Dashboard
            </Button>
          </div>
        </div>
      </div>

      <motion.div className="w-[190vw] pb-[1000px] h-screen bg-primary-transparent rotate-[165deg] absolute top-40 left-0  backdrop-blur-[4px] z-10 blur-3xl "></motion.div>
    </div>
  )
}
