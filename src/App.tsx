import AppRoutes from './config/Routes'
import MainNavbar from './components/navbar/MainNavbar'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './config/store'
function App() {
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
