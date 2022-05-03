// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyA3YNEL5OOmNimIyB3bA3CenZdpm1VsAbA',
  authDomain: 'netflix-clone-mrraindrop.firebaseapp.com',
  projectId: 'netflix-clone-mrraindrop',
  storageBucket: 'netflix-clone-mrraindrop.appspot.com',
  messagingSenderId: '850944315401',
  appId: '1:850944315401:web:d116e1cb355e91bde428d8',
  measurementId: 'G-PR69EXS51S',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
