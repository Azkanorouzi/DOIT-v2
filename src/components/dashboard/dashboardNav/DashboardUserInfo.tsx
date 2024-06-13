import useCurrentUser from "@/hooks/useCurrentUser";
import UserAvatar from "../../ui/UserAvatar";
import { useNavigate } from "react-router-dom";

export default function DashboardUserInfo() {
  const navigate = useNavigate();
  const { data } = useCurrentUser();
  return (
    <button
      className="flex gap-3 justify-center items-center"
      onClick={() => navigate("/profile")}
    >
      <p>{data?.username}</p>
      <UserAvatar customStyle="w-8 h-8" />
    </button>
  );
}
