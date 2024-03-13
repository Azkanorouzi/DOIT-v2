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
  // const authState = useSelector(({ auth }: { auth: AuthState }) => auth)
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })
  // Stores the selected account user wants
  const [selectedAccount, setSelectedAccount] = useState('google')

  function handleSelectedAccount(selected: string) {
    setSelectedAccount(selected)
  }

  const buttonDisabled =
    (Object.keys(form.formState.errors).length == 0 &&
      Object.values(form.getValues()).every((val) => val.length)) ||
    isMethodAccounts
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    const { password, email } = values
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex w-full flex-col gap-1"
      >
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
