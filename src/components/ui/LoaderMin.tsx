import React from 'react'
import { MutatingDots } from 'react-loader-spinner'

export default function LoaderMin() {
  return (
    <div className="absolute grid place-content-center top-0 left-0 right-0 bottom-0 rounded-lg  bg-black bg-opacity-50 backdrop-blur-sm z-10">
      <MutatingDots
        visible={true}
        color="hsl(var(--primary))"
        secondaryColor="hsl(var(--primary))"
        radius="12.5"
        ariaLabel="mutating-dots-loading"
        wrapperStyle={{
          width: '20px',
          height: '20ox',
          display: 'grid',
          placeContent: 'center',
        }}
        wrapperClass=""
      />
    </div>
  )
}
