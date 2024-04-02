import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from './dialog'
import { ReactNode } from 'react'
import { DialogHeader } from './dialog'
import { Button } from './button'
import { DialogClose } from '@radix-ui/react-dialog'

export default function DialogComplete({
  children,
  text,
  desc,
  clickHandler,
  btnText,
  content,
  onOpenChanged,
  open,
}: {
  children: ReactNode
  text: string
  desc: string
  clickHandler?: () => void
  btnText: string
  content?: ReactNode
  onOpenChanged?: () => void
  open?: boolean
}) {
  return (
    <Dialog onOpenChange={onOpenChanged} open={open}>
      <DialogTrigger>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{text}</DialogTitle>
          <DialogDescription>{desc}</DialogDescription>

          <div className="pt-10">{content}</div>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild onClick={clickHandler}>
            <Button variant="destructive">{btnText}</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
