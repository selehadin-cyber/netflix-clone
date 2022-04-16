// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAvATOXmV92WGRWTR-STRxqWSH0YnYk858",
    authDomain: "netflix-clone-17fb6.firebaseapp.com",
    projectId: "netflix-clone-17fb6",
    storageBucket: "netflix-clone-17fb6.appspot.com",
    messagingSenderId: "530729726149",
    appId: "1:530729726149:web:d9242b46e4d1206ad540ac"
  };

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }
