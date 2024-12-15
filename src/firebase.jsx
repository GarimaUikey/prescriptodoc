// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC43pduHVhAizLd8OClPVsYITrxmheVoNg",
  authDomain: "authentication-f8a4b.firebaseapp.com",
  projectId: "authentication-f8a4b",
  storageBucket: "authentication-f8a4b.firebasestorage.app",
  messagingSenderId: "274461901387",
  appId: "1:274461901387:web:8cf052e9953daa1f5943ce"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export {auth}