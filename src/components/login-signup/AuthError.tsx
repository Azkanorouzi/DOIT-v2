import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'

export default function AuthError({ message }: { message: string }) {
  return (
    <Alert
      variant="destructive"
      className="absolute z-30 bg-black bg-opacity-50 backdrop-blur-sm w-[300px] top-40 left-20"
    >
      <i className="fa fa-error" />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>{message}</AlertDescription>
    </Alert>
  )
}
