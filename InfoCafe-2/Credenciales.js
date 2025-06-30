// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8tmxHGDtqiS9RORnq0ErodQxC3z1IqSc",
  authDomain: "login-8eaff.firebaseapp.com",
  projectId: "login-8eaff",
  storageBucket: "login-8eaff.firebasestorage.app",
  messagingSenderId: "216980522632",
  appId: "1:216980522632:web:23cb407f9fcff3440ac13d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app