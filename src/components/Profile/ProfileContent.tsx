import useCurrentUser from '@/hooks/useCurrentUser'
import UserCard from './UserCard'
import UserBackground from './UserBackground'
import ProfileButtons from './ProfileButtons'
import ProfileBoxes from './ProfileBoxes'

export default function ProfileContent() {
  const { data } = useCurrentUser()
  console.log(data)
  return (
    <section className="flex items-center h-[760px] w-screen">
      <UserBackground />
      {/* Profile pic */}
      <UserCard data={data} />
      <div className="ml-48 w-[500px] mt-64 flex flex-col gap-5">
        {/* Description */}
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          dolore alias beatae debitis eaque similique maiores nemo a rerum?
          Dicta modi ullam laboriosam ratione veniam mollitia tempora nisi eum
          error.
        </p>
        <ProfileButtons />
      </div>
      <ProfileBoxes />
    </section>
  )
}
