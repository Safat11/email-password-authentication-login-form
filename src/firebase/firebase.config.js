// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDnnXUwI7uW64wSE68ZKQKKuvFj_lG50sM",
  authDomain: "email-password-auth-fa1e7.firebaseapp.com",
  projectId: "email-password-auth-fa1e7",
  storageBucket: "email-password-auth-fa1e7.firebasestorage.app",
  messagingSenderId: "802254102588",
  appId: "1:802254102588:web:5f3e9a26e87b827123e339",
  measurementId: "G-7L51KYYCH8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;