// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBW2g_-lt9LAsXF-DUcS6MhpZ2PClPAwLo",
  authDomain: "myproject-auth-45d00.firebaseapp.com",
  projectId: "myproject-auth-45d00",
  storageBucket: "myproject-auth-45d00.appspot.com",
  messagingSenderId: "921393481396",
  appId: "1:921393481396:web:ed4f8824b2d760f1e3b9e1",
  measurementId: "G-7ZC317B6CY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export { signInWithEmailAndPassword, auth };