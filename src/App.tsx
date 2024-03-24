import AppRoutes from './config/Routes'
import MainNavbar from './components/navbar/MainNavbar'
import { BrowserRouter } from 'react-router-dom'
import LoaderBig from './components/ui/LoaderBig'
import { useRemoveLoader } from './hooks/useLoader'
import useCurrentUser from './hooks/useCurrentUser'
import { Toaster } from 'react-hot-toast'
import { sayHi } from './utils/sayHi'
import { useEffect } from 'react'

function App() {
  const {
    isLoading: isGettingCurrentUser,
    isAuthenticated,
    data,
  } = useCurrentUser()
  // For removing the loader when loading's finished
  useRemoveLoader({
    animationClass: 'disappear',
    isLoading: isGettingCurrentUser,
    selectorClass: '.loaderBig',
  })

  useEffect(() => {
    console.log(data)
    !isGettingCurrentUser &&
      isAuthenticated &&
      sayHi(isAuthenticated, data?.username)
  }, [isGettingCurrentUser, isAuthenticated, data?.username])

  return (
    <BrowserRouter>
      <Toaster
        gutter={16}
        position="bottom-center"
        containerStyle={{ margin: '8px' }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          className: 'bg-accent text-primary-foreground border border-primary',
        }}
      />
      <LoaderBig />
      <MainNavbar />
      <main className="bg-background dark h-screen ">
        <AppRoutes />
      </main>
    </BrowserRouter>
  )
}

export default App
