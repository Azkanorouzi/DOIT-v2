import React from 'react'

export default function Product({ src, name, desc, price }) {
  return (
    <figure className="bg-black  p-5 rounded-lg">
      <h3>{name}</h3>
      <h4>{price}</h4>
      <img src={src} alt={name} className="w-[150px] h-[150px]" />
      <figcaption>{desc}</figcaption>
    </figure>
  )
}
