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
import { useState } from 'react'
import AccountsLogin from './AccountsLogin'
import { useSignUpWithEmailMutation } from '@/redux-cake/auth-slices/authSlice'
import LoaderMin from '../ui/LoaderMin'

const formSchema = z.object({
  username: z
    .string()
    .min(3, 'at least 3 characters')
    .max(128, 'max 128 characters')
    .refine((value) => /^[a-zA-Z0-9_-]+$/.test(value) && !/\s/.test(value), {
      message: 'only contain letters, numbers, underscores, and hyphens',
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
  passwordRepeat: z
    .string()
    .min(8, 'at least 8 characters')
    .max(256, 'max 256 characters'),
  email: z
    .string()
    .min(8, 'at least 8 characters')
    .max(256, 'max 256 characters')
    .refine((value) => /^\S+@\S+\.\S+$/.test(value), {
      message: 'Invalid email address format',
    }),
})
export default function SignUpForm({
  isMethodAccounts,
}: {
  isMethodAccounts: boolean
}) {
  const [notMatched, setNotMatched] = useState('')
  // To sign up the user
  const [signUpWithEmail, { isLoading: isAuthLoading }] =
    useSignUpWithEmailMutation()

  const [selectedAccount, setSelectedAccount] = useState('google')

  function handleSelectedAccount(selected: string) {
    setSelectedAccount(selected)
  }

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      password: '',
      passwordRepeat: '',
      email: '',
    },
  })
  const buttonDisabled =
    (Object.keys(form.formState.errors).length == 0 &&
      Object.values(form.getValues()).every((val) => val.length)) ||
    isMethodAccounts

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (values.password !== values.passwordRepeat) {
      setNotMatched('Password did not match')
      return
    }
    const { password, email, username } = values
    // dispatch(signUp({ password, email, username }))
    await signUpWithEmail({
      password,
      email,
      username,
    }).unwrap()
  }

  return (
    <Form {...form}>
      {isAuthLoading && <LoaderMin />}
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex w-full flex-col gap-1"
      >
        {isMethodAccounts ? (
          <AccountsLogin
            type="signup"
            setSelectedAccount={handleSelectedAccount}
            selectedAccount={selectedAccount}
          />
        ) : (
          <>
            {' '}
            <div>
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => {
                  return (
                    <FormItem className="w-full">
                      <FormLabel>Username</FormLabel>
                      <FormControl>
                        <Input placeholder="johnDoe22" {...field} type="text" />
                      </FormControl>
                      {form?.formState?.errors?.username ? (
                        <FormError />
                      ) : (
                        <FormDescription>Your public username</FormDescription>
                      )}
                    </FormItem>
                  )
                }}
              />
            </div>
            <Separator />
            <div className="flex flex-row gap-5">
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <>
                    <FormItem className="w-full">
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
                        <FormDescription>
                          Your account's password
                        </FormDescription>
                      )}
                    </FormItem>
                  </>
                )}
              />
              <FormField
                control={form.control}
                name="passwordRepeat"
                render={({ field }) => (
                  <>
                    <FormItem className="w-full">
                      <FormLabel>Repeat password</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="adf23Ajk"
                          {...field}
                          type="password"
                        />
                      </FormControl>
                      {notMatched.length ? (
                        <FormError customErr="Password did not match" />
                      ) : form?.formState?.errors?.passwordRepeat ? (
                        <FormError />
                      ) : (
                        <FormDescription>
                          Your account's password
                        </FormDescription>
                      )}
                    </FormItem>
                  </>
                )}
              />
            </div>
            <Separator />
            <div className="flex flex-col gap-2 ">
              <div className="flex flex-row gap-4">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <>
                      <FormItem className="w-full ">
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="johndoe@gmail.com"
                            {...field}
                            type="email"
                          />
                        </FormControl>
                        {form?.formState?.errors?.email ? (
                          <FormError />
                        ) : (
                          <FormDescription>
                            Your Email account for signing in
                          </FormDescription>
                        )}
                      </FormItem>
                    </>
                  )}
                />
              </div>
            </div>
            <Separator />
          </>
        )}

        <div className="flex justify-center gap-2 pt-4">
          {!isMethodAccounts && (
            <Button variant={'outline'} className="text-primary">
              {' '}
              Cancel{' '}
            </Button>
          )}

          <Button
            variant={'destructive'}
            className="bg-primary"
            disabled={!buttonDisabled || isAuthLoading}
          >
            {' '}
            Submit{' '}
          </Button>
        </div>
      </form>
    </Form>
  )
}
