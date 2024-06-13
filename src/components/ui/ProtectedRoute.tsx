import useCurrentUser from "@/hooks/useCurrentUser";
import { authenticationFailedMessage } from "@/utils/messages";
import { ReactNode } from "react";
import toast from "react-hot-toast";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({
  children,
  placeholder,
  navigateTo,
}: {
  children: ReactNode;
  navigateTo: string;
  placeholder: ReactNode;
}) {
  const { isAuthenticated, isLoading } = useCurrentUser();
  const { message, icon } = authenticationFailedMessage;
  // Redirection
  if (!isAuthenticated && !isLoading) {
    toast(message, { icon });
    return <Navigate to={navigateTo} />;
  }

  return (
    <>
      {!isAuthenticated && !isLoading && placeholder}
      {isAuthenticated && children}
    </>
  );
}
