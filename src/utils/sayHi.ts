import toast from 'react-hot-toast'

let wasAuthenticated = false
export function sayHi(authenticated: boolean, username: string) {
  if (authenticated) {
    // Hot toast
    !wasAuthenticated &&
      toast(`Welcome ${username}`, {
        icon: '👋',
      })

    wasAuthenticated = true

    return
  }

  // hot toast
  wasAuthenticated &&
    toast(
      `Hi anonymous friend, please login to your account, or connect to the internet and doit`,
      {
        icon: '😄',
      }
    )
  wasAuthenticated = false
}
