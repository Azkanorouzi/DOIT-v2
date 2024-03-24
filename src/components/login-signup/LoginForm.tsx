'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Separator } from '../ui/separator'
import { Button } from '../ui/button'
import FormError from './FormError'
import AccountsLogin from './AccountsLogin'
import { useState } from 'react'
import {
  useLoginMutation,
  useLoginWithGithubMutation,
} from '@/redux-cake/auth-slices/authSlice'
import LoaderMin from '../ui/LoaderMin'
import { useNavigate } from 'react-router-dom'

const formSchema = z.object({
  email: z
    .string()
    .min(8, 'at least 8 characters')
    .max(256, 'max 256 characters')
    .refine((value) => /^\S+@\S+\.\S+$/.test(value), {
      message: 'Invalid email address format',
    }),
  password: z
    .string()
    .min(8, 'at least 8 characters')
    .max(256, 'max 256 characters')
    .refine(
      (password) => {
        const containsLetter = /[a-zA-Z]/.test(password)
        const containsNumber = /\d/.test(password)
        return containsLetter && containsNumber
      },
      {
        message: 'include numbers and letters',
      }
    ),
})
export default function LoginForm({
  isMethodAccounts,
}: {
  isMethodAccounts: boolean
}) {
  // Stores the selected account user wants
  const [selectedAccount, setSelectedAccount] = useState('github')
  const navigate = useNavigate()
  const [login, { isLoading }] = useLoginMutation()
  const [loginWithGithub, { isLoading: isLoginGithubLoading }] =
    useLoginWithGithubMutation()

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: isMethodAccounts ? 'testtest@gmail.com' : '',
      password: isMethodAccounts ? 'testtest1234' : '',
    },
  })

  function handleSelectedAccount(selected: string) {
    setSelectedAccount(selected)
  }

  const buttonDisabled =
    (Object.keys(form.formState.errors).length == 0 &&
      Object.values(form.getValues()).every((val) => val.length)) ||
    (isMethodAccounts && selectedAccount.length)
  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (isMethodAccounts) {
      alert('hi')
      const res = await loginWithGithub({}).unwrap()
      // if (user?.role === 'authenticated') navigate('/profile')
      return
    }

    const { password, email } = values
    // Logging in
    const { user } = await login({ password, email }).unwrap()
    // Navigating the user if it was successful
    if (user?.role === 'authenticated') navigate('/profile')
  }

  // async function onSubmitAccount() {

  // }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex w-full flex-col gap-1"
      >
        {(isLoading || isLoginGithubLoading) && <LoaderMin />}
        {isMethodAccounts ? (
          <AccountsLogin
            type="login"
            setSelectedAccount={handleSelectedAccount}
            selectedAccount={selectedAccount}
          />
        ) : (
          <>
            <div>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="johnDoe22" {...field} type="text" />
                    </FormControl>
                    {form?.formState?.errors?.email ? (
                      <FormError />
                    ) : (
                      <FormDescription>Your email account</FormDescription>
                    )}
                  </FormItem>
                )}
              />
            </div>
            <Separator />
            <div className="flex flex-row gap-5">
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <>
                    <FormItem className="w-full ">
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="adf23Ajk"
                          {...field}
                          type="password"
                        />
                      </FormControl>
                      {form?.formState?.errors?.password ? (
                        <FormError />
                      ) : (
                        <FormDescription>Your password</FormDescription>
                      )}
                    </FormItem>
                  </>
                )}
              />
            </div>
            <Separator />
          </>
        )}
        <div className="flex justify-center gap-2 pt-4">
          {!isMethodAccounts && (
            <Button
              variant={'outline'}
              className="text-primary"
              type="reset"
              onClick={function () {
                form.reset()
              }}
            >
              {' '}
              Cancel{' '}
            </Button>
          )}
          <Button
            variant={'destructive'}
            className="bg-primary"
            disabled={!buttonDisabled}
          >
            {' '}
            Login
          </Button>
        </div>
      </form>
    </Form>
  )
}
