// import { setAuthErr } from '@/redux-cake/auth-slices/authSlice'
// import { Dispatch } from 'redux'

// export function setError(err: Error, dispatch: Dispatch) {
//   const errMessage = String(err.message).trim()

//   if (errMessage.includes('(auth/invalid-credential)'))
//     dispatch(setAuthErr('Invalid email or password'))
//   else if (errMessage.includes('(auth/too-many-requests)'))
//     dispatch(
//       setAuthErr(
//         'Access to this account has been temporarily disabled due to many failed login attempts. try again later'
//       )
//     )
//   else dispatch(setAuthErr('No internet connection'))
// }
