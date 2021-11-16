import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  
    // apiKey: "AIzaSyCL82cbY8yOSnDIN_IDCrqZ9cSOGQI2SLg",
    // authDomain: "react-firebase-auth-33d74.firebaseapp.com",
    // projectId: "react-firebase-auth-33d74",
    // storageBucket: "react-firebase-auth-33d74.appspot.com",
    // messagingSenderId: "807190295398",
    // appId: "1:807190295398:web:ff2f2f64b554c7e66d0ea7"




}


const app = initializeApp(firebaseConfig);
console.log(firebaseConfig)


export const auth = getAuth(app);
