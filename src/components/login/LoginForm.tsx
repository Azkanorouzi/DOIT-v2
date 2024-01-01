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
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Separator } from '../ui/separator'
import { Button } from '../ui/button'

const formSchema = z.object({
  username: z.string().min(3).max(128),
  password: z.string().min(8).max(256),
  passwordRepeat: z.string().min(8).max(256),
  email: z.string().min(8).max(256),
  validationCode: z.string().length(4),
})
export function LoginForm() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      password: '',
      passwordRepeat: '',
      email: '',
      validationCode: '0000',
    },
  })

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex w-full flex-col gap-1"
      >
        <div>
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="johnDoe22" {...field} type="text" />
                </FormControl>
                <FormDescription>This is your public username.</FormDescription>
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
                <FormItem className="w-full">
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input placeholder="adf23Ajk" {...field} type="password" />
                  </FormControl>
                  <FormDescription>Your account's password</FormDescription>
                  <FormMessage />
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
                    <Input placeholder="adf23Ajk" {...field} type="password" />
                  </FormControl>
                  <FormDescription>Please repeat your password</FormDescription>
                  <FormMessage />
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
                  <FormItem className="w-full">
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="johndoe@gmail.com"
                        {...field}
                        type="email"
                      />
                    </FormControl>
                    <FormDescription>Enter your email address</FormDescription>
                    <FormMessage />
                  </FormItem>
                </>
              )}
            />
            <FormField
              control={form.control}
              name="validationCode"
              render={({ field }) => (
                <>
                  <FormItem className="w-full">
                    <FormLabel>Validation code</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="8957"
                        {...field}
                        type="type"
                        maxLength={4}
                        minLength={4}
                      />
                    </FormControl>
                    <FormDescription>Email validation code</FormDescription>
                    <FormMessage />
                  </FormItem>
                </>
              )}
            />
          </div>
          <div className="flex items-center justify-center">
            <Button variant="link" className=" text-[13px] p-0" disabled>
              {' '}
              Receive code
            </Button>
          </div>
        </div>
        <Separator />
        <div className="flex justify-center gap-2 pt-4">
          <Button variant={'outline'} className="text-primary">
            {' '}
            Cancel{' '}
          </Button>
          <Button variant={'destructive'} className="bg-primary" disabled>
            {' '}
            Submit{' '}
          </Button>
        </div>
      </form>
    </Form>
  )
}
