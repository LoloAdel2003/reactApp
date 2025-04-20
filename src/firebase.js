// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBFJciu8cUa2gUKRg1Cy6kR43OCrDHgI5w",
  authDomain: "reactcommerce-adfb2.firebaseapp.com",
  projectId: "reactcommerce-adfb2",
  storageBucket: "reactcommerce-adfb2.firebasestorage.app",
  messagingSenderId: "1050461976515",
  appId: "1:1050461976515:web:4e1370ba5fcd1061bdef76",
  measurementId: "G-F7E3D63QEP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);