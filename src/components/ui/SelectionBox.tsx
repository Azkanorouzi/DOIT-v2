import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react'

const selectionBoxContext = createContext(null)

// Selection box container
export default function SelectionBox({
  children,
  defaultSelected = '',
  selectedClass = '',
  deselectedClass = '',
  setSelectedAccount,
}: {
  children: ReactNode
  defaultSelected?: string
  selectedClass?: string
  deselectedClass?: string
  setSelectedAccount?: (selected: string) => void
}) {
  const [selected, setSelected] = useState(defaultSelected)
  // For having access to the selected item, from the outside
  useEffect(() => {
    setSelectedAccount(selected)
  }, [selected, setSelectedAccount])

  return (
    <selectionBoxContext.Provider
      value={{ selected, setSelected, selectedClass, deselectedClass }}
    >
      {children}
    </selectionBoxContext.Provider>
  )
}

function Item({
  children,
  className,
  name,
}: {
  children: ReactNode
  className?: string
  name: string | number
}) {
  const { selected, setSelected, selectedClass, deselectedClass } =
    useContext(selectionBoxContext)
  return (
    <button
      className={`w-full border-2  p-4 rounded-full flex justify-between transition-colors ${className} ${
        selected === name ? selectedClass : deselectedClass
      }`}
      onClick={() => setSelected(name)}
    >
      {children}
    </button>
  )
}

SelectionBox.Item = Item
