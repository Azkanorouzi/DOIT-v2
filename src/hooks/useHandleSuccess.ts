import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export function useHandleSuccess({
  isSuccess,
  redirectUrl,
}: {
  isSuccess: boolean
  redirectUrl: string
}) {
  const navigate = useNavigate()

  useEffect(() => {
    if (!isSuccess) return
    navigate(redirectUrl)
  }, [isSuccess, navigate, redirectUrl])
}
