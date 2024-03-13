import { useLocation } from 'react-router-dom'

function useGetSearchParams(paramName: string) {
  const location = useLocation()
  const params = new URLSearchParams(location.search)
  const paramValue = params.get('method')

  return paramValue
}

export default useGetSearchParams
