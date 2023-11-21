// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZ2HzH34nqf8mjoVlgvHmtOwJ_mIupqNw",
  authDomain: "education-training-program.firebaseapp.com",
  projectId: "education-training-program",
  storageBucket: "education-training-program.appspot.com",
  messagingSenderId: "209885909334",
  appId: "1:209885909334:web:e94e3b70f494c76ed486f7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;