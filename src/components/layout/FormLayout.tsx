import FormCard from '../login-signup/FormCard'
import { ReactNode } from 'react'

import LoginForm from '../login-signup/LoginForm'
import SignUpForm from '../login-signup/SignUpForm'
import useIsAuthenticated from '@/hooks/useCurrentUser'
import LoginSuccess from '../login-signup/LoginSuccess'
import { RiLoginCircleFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import useGetSearchParams from '@/hooks/useGetSearchParams'

export default function FormLayout({
  link,
  type,
}: {
  link: ReactNode
  type: 'signup' | 'login'
}) {
  const isAuthenticated = useIsAuthenticated()
  // Gets the specified param from url
  const paramValue = useGetSearchParams('method')
  const isMethodAccounts = paramValue === 'accounts'

  return (
    <section className="h-screen flex items-center justify-center pt-20 flex-col gap-3 ">
      {/* FormCard will present the actual form, and wrap it into a form card */}
      {!isAuthenticated ? (
        <FormCard
          form={
            type === 'signup' ? (
              <SignUpForm isMethodAccounts={isMethodAccounts} />
            ) : (
              <LoginForm isMethodAccounts={isMethodAccounts} />
            )
          }
          title={type === 'signup' ? 'Sign up' : 'Login'}
          description={
            type === 'signup' ? (
              <div>
                <p className="text-muted-foreground">
                  Create a new doit account
                </p>
                <Link
                  to={isMethodAccounts ? '/signup' : '/signup?method=accounts'}
                  className="text-primary flex items-center gap-2 hover:text-accent-foreground"
                >
                  {isMethodAccounts
                    ? 'Signup with accounts'
                    : 'Signup with email and password'}
                  <RiLoginCircleFill />
                </Link>
              </div>
            ) : (
              <div>
                <p className="text-muted-foreground">
                  Login to an existing doing account
                </p>
                <Link
                  to={isMethodAccounts ? '/login' : '/login?method=accounts'}
                  className="text-primary flex items-center gap-2 hover:text-accent-foreground"
                >
                  {isMethodAccounts
                    ? 'Login with accounts'
                    : 'Login with email and password'}{' '}
                  <RiLoginCircleFill />
                </Link>
              </div>
            )
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
