// Our app routes, are managed here
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import FormLayout from '@/components/layout/FormLayout'
import TextLink from '@/components/ui/TextLink'
import DashboardLayout from '@/components/layout/DashboardLayout'
import useIsAuthenticated from '@/hooks/useCurrentUser'
import HomeLayout from '@/components/layout/HomeLayout'

export default function AppRoutes() {
  const isAuthenticated = useIsAuthenticated()
  return (
    <Routes>
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
      <Route path="/dashboard" element={<DashboardLayout />} />
    </Routes>
  )
}
