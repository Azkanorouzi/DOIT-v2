import { FaKey } from "react-icons/fa";
import MotionButton from "../ui/MotionButton";
import DialogComplete from "../ui/DialogComplete";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "../ui/form";
import { Input } from "../ui/input";
import FormError from "../login-signup/FormError";
import { useUpdatePasswordMutation } from "@/redux-cake/user-slices/userSlice";
import toast from "react-hot-toast";

const formSchema = z.object({
  password: z
    .string()
    .min(8, "At least 8 characters")
    .max(256, "Max 256 characters")
    .refine(
      (password) => {
        const containsLetter = /[a-zA-Z]/.test(password);
        const containsNumber = /\d/.test(password);
        return containsLetter && containsNumber;
      },
      {
        message: "include numbers and letters",
      },
    ),
  passwordRepeat: z
    .string()
    .min(8, "at least 8 characters")
    .max(256, "max 256 characters"),
});

export default function NewPasswordButton() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      password: "",
      passwordRepeat: "",
    },
  });
  const [updatePassword, { isLoading }] = useUpdatePasswordMutation();

  async function clickHandler(values: z.infer<typeof formSchema>) {
    if (values.password !== values.passwordRepeat) {
      toast.error("Password did not match");
      return;
    }
    await updatePassword({ password: values.password });
  }

  const formEl = (
    <Form {...form}>
      <form
        className="flex gap-10 mb-10"
        onSubmit={form.handleSubmit(clickHandler)}
      >
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder="johnDoe22" {...field} type="password" />
              </FormControl>
              {form?.formState?.errors?.password ? (
                <FormError />
              ) : (
                <FormDescription>Your new password</FormDescription>
              )}
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="passwordRepeat"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Password repeat</FormLabel>
              <FormControl>
                <Input placeholder="johnDoe22" {...field} type="password" />
              </FormControl>
              {form?.formState?.errors?.passwordRepeat ? (
                <FormError />
              ) : (
                <FormDescription>Repeat your new password</FormDescription>
              )}
            </FormItem>
          )}
        />
      </form>
    </Form>
  );

  return (
    <DialogComplete
      text="Change your password"
      desc="Enter the password"
      btnText="Update password"
      content={formEl}
      clickHandler={form.handleSubmit(clickHandler)}
      onOpenChanged={() => form.reset()}
    >
      <MotionButton
        className="bg-secondary w-full lg:w-fit max-w-60 border border-primary text-primary flex gap-2 hover:text-secondary"
        initial={{ scale: 0.9, opacity: 0.1 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.5 }}
        disabled={isLoading}
      >
        {" "}
        <FaKey /> Change password
      </MotionButton>
    </DialogComplete>
  );
}
