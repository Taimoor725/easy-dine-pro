import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyACAIhXOgxWSDfTPoHCmy3sSi_GkD0gufs",
  authDomain: "easydine-6fd8f.firebaseapp.com",
  projectId: "easydine-6fd8f",
  storageBucket: "easydine-6fd8f.appspot.com",
  messagingSenderId: "661528856781",
  appId: "1:661528856781:web:8742057205ffffe1ffc184",
  measurementId: "G-F34CQYDNHE"
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth();

export { auth, signInWithEmailAndPassword }
