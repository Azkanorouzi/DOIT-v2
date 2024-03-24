import React from 'react'

export default function UserBackground() {
  return (
    <div
      className="w-[100vw] max-w-[1800px] h-[350px] absolute top-0 border-b-primary border-b-4"
      style={{
        background: `url(default-bg.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: '.8',
      }}
    ></div>
  )
}
