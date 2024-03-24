import { useEffect } from 'react'

export function useRemoveLoader({
  animationClass = '',
  selectorClass = '',
  isLoading = false,
}: {
  animationClass: string
  isLoading: boolean
  selectorClass: string
}) {
  useEffect(() => {
    const loader = document.querySelector(selectorClass)
    if (isLoading) {
      loader?.classList?.remove('hidden')
      loader?.classList?.remove(animationClass)
    }
    if (!isLoading) loader?.classList?.add(animationClass)
  }, [isLoading, animationClass, selectorClass])
}
