import { RotatingLines } from 'react-loader-spinner'

export default function LoaderSmall() {
  return (
    <div className="stroke-secondary-foreground">
      <RotatingLines
        visible={true}
        width="20"
        strokeWidth="5"
        strokeColor=""
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
      />
    </div>
  )
}
