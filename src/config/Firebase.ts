// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyBBMdfwx45Akrk10F3qzXgmpb6-n6uJ_z4',
  authDomain: 'doit-3c16d.firebaseapp.com',
  projectId: 'doit-3c16d',
  storageBucket: 'doit-3c16d.appspot.com',
  messagingSenderId: '471409443398',
  appId: '1:471409443398:web:394a5078274a4e5a390047',
  measurementId: 'G-SQXE4HZXZN',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)
