import { useNavigate } from 'react-router-dom'
import { Button } from './button'
import GoBack from './GoBackButton'

export default function P404() {
  const navigate = useNavigate()

  console.log(location)

  return (
    <section>
      <div className="grid place-content-center h-screen text-center">
        <h1 className="text-9xl text-primary"> 404 </h1>
        <h2 className="text-5xl">Page not found</h2>
        <div className="flex gap-3 justify-center mt-8">
          <GoBack />
          <Button onClick={() => navigate('/')} variant="outline">
            Go Home
          </Button>
        </div>
      </div>
    </section>
  )
}
