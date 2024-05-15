import useCurrentUser from "@/hooks/useCurrentUser";
import UserCard from "./UserCard";
import UserBackground from "./UserBackground";
import ProfileButtons from "./ProfileButtons";
import ProfileBoxes from "./ProfileBoxes";
import { motion } from "framer-motion";

export default function ProfileContent() {
  const { data } = useCurrentUser();
  return (
    <section className="flex xl:flex-row flex-col items-center lg:h-[760px] w-screen h-screen overflow-y-scroll lg:overflow-y-visible lg:items-start lg:-items-center xl:pt-36">
      <UserBackground imgUrl={data?.background ?? ""} key={Math.random()} />
      {/* Profile pic */}
      <UserCard data={data} />
      <div className="lg:ml-48 w-[80vw] lg:w-[500px] lg:mt-64 xl:mt-36  flex flex-col gap-5 z-10">
        {/* Description */}
        <motion.p
          initial={{ translateX: "100px", opacity: 0.5 }}
          animate={{ translateX: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-64 mt-44 lg:max-w-full mx-auto bg-[rgba(0,0,0,.5)] text-center lg:text-left"
        >
          {data?.desc}
        </motion.p>
        <ProfileButtons />
      </div>
      <ProfileBoxes />
    </section>
  );
}
