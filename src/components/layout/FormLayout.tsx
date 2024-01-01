import { LoginForm } from '../login/LoginForm'
import FormCard from '../login/FormCard'
import { ReactNode } from 'react'

export default function FormLayout({ link }: { link: ReactNode }) {
  return (
    <section className="h-screen flex items-end justify-center pb-24">
      <FormCard
        form={<LoginForm />}
        title="Sign up"
        description="Create a new doit account"
      />
      {link}
    </section>
  )
}
