import { ReactNode } from "react";
import { FaDragon } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function DashboardNavLink({
  hovered = true,
  icon = <FaDragon />,
  linkTo = "",
  text = "Home",
  active = false,
}: {
  hovered?: boolean;
  icon?: ReactNode;
  linkTo?: string;
  text?: string;
  active: boolean;
}) {
  const navigate = useNavigate();

  return (
    <div
      className={`text-2xl transition-all flex gap-9 hover:text-primary cursor-pointer ${active ? "text-primary" : ""}`}
      onClick={linkTo ? () => navigate(linkTo) : () => {}}
      role="link"
    >
      {icon}
      <p
        className={`text-lg   ${
          hovered ? "opacity-1 blur-none" : "opacity-0 blur-md"
        }`}
      >
        {" "}
        {text}{" "}
      </p>
    </div>
  );
}
