import { initializeApp } from 'firebase/app';
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDiJvdi8xCf53TcHnWjfpK1yyFWYHU3k10",
  authDomain: "react-authentication-812a5.firebaseapp.com",
  projectId: "react-authentication-812a5",
  storageBucket: "react-authentication-812a5.appspot.com",
  messagingSenderId: "191285513290",
  appId: "1:191285513290:web:0371c840f6fc691022aab3",
  measurementId: "G-Z5T2Q9D5WM"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;