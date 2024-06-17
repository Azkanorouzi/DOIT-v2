// Our app routes, are managed here
import { Routes, Route, Navigate } from "react-router-dom";
import FormLayout from "@/components/layout/FormLayout";
import TextLink from "@/components/ui/TextLink";
import DashboardLayout from "@/components/layout/DashboardLayout";
import useIsAuthenticated from "@/hooks/useCurrentUser";
import HomeLayout from "@/components/layout/HomeLayout";
import ProfileLayout from "@/components/layout/ProfileLayout";
import ProtectedRoute from "@/components/ui/ProtectedRoute";

import UnauthorizedPage from "@/components/ui/UnauthorizedPage";
import InboxLayout from "@/components/layout/InboxLayout";
import P404 from "@/components/ui/P404";
import MainLayout from "@/components/layout/MainLayout";

export default function AppRoutes() {
  const { isAuthenticated } = useIsAuthenticated();

  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route
          element={
            <FormLayout
              link={
                !isAuthenticated ? (
                  <TextLink
                    text="Create a new account, or "
                    link="login to an existing account"
                    to="/login"
                  />
                ) : (
                  <TextLink
                    text="You're logged in now,"
                    link="Go to dashboard"
                    to="/login"
                  />
                )
              }
              type="signup"
            />
          }
          path="/signup"
        />
        <Route
          element={
            <FormLayout
              link={
                !isAuthenticated ? (
                  <TextLink
                    text="Login to your account, or "
                    link="create a new account"
                    to="/signup"
                  />
                ) : (
                  <TextLink
                    text="You're logged in now,"
                    link="Go to dashboard"
                    to="/signup"
                  />
                )
              }
              type="login"
            />
          }
          path="/login"
        />
        <Route path="/" element={<HomeLayout />} />
        <Route
          path="/profile"
          element={
            <ProtectedRoute
              navigateTo="/login"
              placeholder={
                <UnauthorizedPage message="To access profile you must be authorized" />
              }
            >
              <ProfileLayout />
            </ProtectedRoute>
          }
        />
        <Route
          path="/inbox"
          element={
            <ProtectedRoute
              navigateTo="/login"
              placeholder={
                <UnauthorizedPage message="To access inbox you must be authorized" />
              }
            >
              <InboxLayout />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<P404 />} />
      </Route>
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute
            navigateTo="/login"
            placeholder={<UnauthorizedPage />}
          >
            <DashboardLayout />{" "}
          </ProtectedRoute>
        }
      >
        <Route path="/dashboard/:organization/:mode/:container?" />
      </Route>

      {/* ====== Aliases ====== */}
      <Route
        path="/dashboard/todo"
        element={<Navigate to={"/dashboard/personal/todo"} />}
      />

      <Route
        path="/dashboard/charts"
        element={<Navigate to={"/dashboard/personal/charts"} />}
      />
      <Route
        path="/dashboard/calendar"
        element={<Navigate to={"/dashboard/personal/calendar"} />}
      />

      <Route
        path="/dashboard/goals"
        element={<Navigate to={"/dashboard/personal/goals"} />}
      />

      <Route
        path="/dashboard/pomodoro"
        element={<Navigate to={"/dashboard/personal/pomodoro"} />}
      />

      <Route
        path="/dashboard/finance"
        element={<Navigate to={"/dashboard/personal/finance"} />}
      />
    </Routes>
  );
}
