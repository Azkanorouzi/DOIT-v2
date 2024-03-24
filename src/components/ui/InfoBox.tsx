import { ReactNode } from 'react'

export default function InfoBox({
  text,
  icon,
  amount,
  style,
}: {
  text: string
  icon: ReactNode
  amount: string
  style?: string
}) {
  return (
    <figure
      className={`text-primary p-5 flex justify-center items-center flex-col text-center rounded-xl w-36 backdrop-blur-md border border-primary ${style}`}
    >
      <div className="flex flex-col justify-center items-center ">
        {icon}
        <p>{text}</p>
      </div>
      <figcaption>{amount}</figcaption>
    </figure>
  )
}
