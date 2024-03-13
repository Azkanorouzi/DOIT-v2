import { FaGithub, FaGoogle } from 'react-icons/fa'
import SelectionBox from '../ui/selectionBox'
import { FaApple } from 'react-icons/fa'

export default function AccountsLogin({
  type,
  setSelectedAccount,
  selectedAccount,
}: {
  type: 'signup' | 'login'
  setSelectedAccount: (selected: string) => void
  selectedAccount: string
}) {
  return (
    <article className="flex flex-col gap-3">
      <SelectionBox
        defaultSelected={selectedAccount}
        selectedClass="border-primary text-primary"
        deselectedClass="text-primary-foreground"
        setSelectedAccount={setSelectedAccount}
      >
        {/* Google */}
        <SelectionBox.Item className="bg-popover " name={'google'}>
          <FaGoogle className="text-2xl" />
          <p>{type} with google</p>
          <div></div>
        </SelectionBox.Item>
        {/* Github */}
        <SelectionBox.Item className="bg-popover " name={'github'}>
          <FaGithub className="text-2xl" />
          <p>{type} with github</p>
          <div></div>
        </SelectionBox.Item>
        {/* Apple */}
        <SelectionBox.Item className="bg-popover " name={'apple'}>
          <FaApple className="text-2xl" />
          <p>{type} with apple id</p>
          <div></div>
        </SelectionBox.Item>
      </SelectionBox>
    </article>
  )
}
