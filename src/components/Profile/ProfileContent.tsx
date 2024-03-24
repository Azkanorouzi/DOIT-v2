import useCurrentUser from '@/hooks/useCurrentUser'
import UserCard from './UserCard'
import UserBackground from './UserBackground'
import ProfileButtons from './ProfileButtons'
import ProfileBoxes from './ProfileBoxes'
import { motion } from 'framer-motion'

export default function ProfileContent() {
  const { data } = useCurrentUser()
  console.log(data, 'this is data')
  return (
    <section className="flex items-center h-[760px] w-screen">
      <UserBackground imgUrl={data?.background ?? ''} />
      {/* Profile pic */}
      <UserCard data={data} />
      <div className="ml-48 w-[500px] mt-80 flex flex-col gap-5">
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
