import FormLayout from './components/layout/FormLayout'
import MainNavbar from './components/navbar/MainNavbar'
import { Button } from './components/ui/button'

function App() {
  return (
    <>
      <MainNavbar />
      <main className="bg-background dark h-screen">
        <FormLayout />
      </main>
    </>
  )
}

export default App
