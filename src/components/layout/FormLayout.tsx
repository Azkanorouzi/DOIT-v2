import FormCard from '../login-signup/FormCard'
import { ReactNode } from 'react'

import LoginForm from '../login-signup/LoginForm'
import SignUpForm from '../login-signup/SignUpForm'
import useIsAuthenticated from '@/hooks/useIsAuthenticated'
import LoginSuccess from '../login-signup/LoginSuccess'
import { useSelector } from 'react-redux'
import { motion } from 'framer-motion'

export default function FormLayout({
  link,
  type,
}: {
  link: ReactNode
  type: 'signup' | 'login'
}) {
  const authErr = useSelector(({ auth }) => auth.authErr)
  const isAuthenticated = useIsAuthenticated()
  return (
    <section className="h-screen flex items-center justify-center pt-10 flex-col gap-3 ">
      {/* FormCard will present the actual form, and wrap it into a form card */}
      {!isAuthenticated ? (
        <FormCard
          form={type === 'signup' ? <SignUpForm /> : <LoginForm />}
          title={type === 'signup' ? 'Sign up' : 'Login'}
          description={
            type === 'signup'
              ? 'Create a new doit account'
              : 'Login to an existing doit account'
          }
        />
      ) : (
        <LoginSuccess />
      )}
      {/* Create a new doit account, Login if you already have an account (or vice versa) */}
      {link}
    </section>
  )
}
