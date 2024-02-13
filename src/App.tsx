import AppRoutes from './config/Routes'
import MainNavbar from './components/navbar/MainNavbar'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './config/store'
import { useEffect } from 'react'
import supabase from './config/supabase'
function App() {
  useEffect(() => {
    async function getData() {
      const { data, error } = await supabase.from('User').select('*')

      console.log(data, error)
    }
    getData()
  }, [])
  return (
    <Provider store={store}>
      <BrowserRouter>
        <MainNavbar />
        <main className="bg-background dark h-screen">
          <AppRoutes />
        </main>
      </BrowserRouter>
    </Provider>
  )
}

export default App
