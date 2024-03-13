import AppRoutes from './config/Routes'
import MainNavbar from './components/navbar/MainNavbar'
import { BrowserRouter } from 'react-router-dom'
import LoaderBig from './components/ui/LoaderBig'
import { useRemoveLoader } from './hooks/useLoader'
import useCurrentUser from './hooks/useCurrentUser'

function App() {
  const { isLoading: isGettingCurrentUser } = useCurrentUser()

  // For removing the loader when loading's finished
  useRemoveLoader({
    animationClass: 'disappear',
    isLoading: isGettingCurrentUser,
    selectorClass: '.loaderBig',
  })

  return (
    <BrowserRouter>
      <LoaderBig />
      <MainNavbar />
      <main className="bg-background dark h-screen">
        <AppRoutes />
      </main>
    </BrowserRouter>
  )
}

export default App
