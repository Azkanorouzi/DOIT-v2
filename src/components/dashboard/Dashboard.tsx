import { Button } from '../ui/button'
import { useDispatch, useSelector } from 'react-redux'
import useIsAuthenticated from '@/hooks/useIsAuthenticated'
import { Navigate } from 'react-router-dom'
import { logOut } from '@/redux-cake/auth-slices/authThunks'
import Product from './Product'
import { useEffect } from 'react'
import { getProductsData } from '@/redux-cake/doit-slices/productThunks'
import LoaderMin from '../ui/LoaderMin'

export default function Dashboard() {
  const auth = useSelector(({ auth }) => auth)
  const isAuthorized = useIsAuthenticated()
  const dispatch = useDispatch()
  const product = useSelector(({ product }) => product.product)
  console.log(product)
  useEffect(() => {
    if (isAuthorized) dispatch(getProductsData())
  }, [isAuthorized, dispatch])

  if (!isAuthorized) return <Navigate to={'/login'} />
  return (
    <div className="flex justify-center flex-col items-center">
      <h1>You're now logged in</h1>
      <h2>The bellow product is coming from database</h2>
      {product?.map((p) => {
        return (
          <Product name={p.name} desc={p.desc} src={p.img} price={p.price} />
        )
      }) ?? <LoaderMin />}
      <Button variant={'destructive'} onClick={() => dispatch(logOut())}>
        Logout
      </Button>
    </div>
  )
}
