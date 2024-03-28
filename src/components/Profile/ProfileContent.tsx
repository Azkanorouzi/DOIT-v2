import useCurrentUser from '@/hooks/useCurrentUser'
import UserCard from './UserCard'
import UserBackground from './UserBackground'
import ProfileButtons from './ProfileButtons'
import ProfileBoxes from './ProfileBoxes'
import { motion } from 'framer-motion'

export default function ProfileContent() {
  const { data } = useCurrentUser()
  return (
    <section className="flex lg:flex-row flex-col items-center lg:h-[760px] w-screen h-screen overflow-scroll">
      <UserBackground imgUrl={data?.background ?? ''} key={Math.random()} />
      {/* Profile pic */}
      <UserCard data={data} />
      <div className="lg:ml-48 w-[80vw] lg:w-[500px] lg:mt-80 mt-10 flex flex-col gap-5 z-10">
        {/* Description */}
        <motion.p
          initial={{ translateX: '100px', opacity: 0.5 }}
          animate={{ translateX: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          dolore alias beatae debitis eaque similique maiores nemo a rerum?
          Dicta modi ullam laboriosam ratione veniam mollitia tempora nisi eum
          error.
        </motion.p>
        <ProfileButtons />
      </div>
      <ProfileBoxes />
    </section>
  )
}
