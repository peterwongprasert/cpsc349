import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAhQinzfK_Y8YTtNP89Q6xiwYTITLy0-78",
  authDomain: "cpsc-349-16ae4.firebaseapp.com",
  projectId: "cpsc-349-16ae4",
  storageBucket: "cpsc-349-16ae4.appspot.com",
  messagingSenderId: "282632731851",
  appId: "1:282632731851:web:5705801943d17189492f4e",
  measurementId: "G-2J89WM117B"
}

// init firebase app
initializeApp(firebaseConfig);

//init services
const db = getFirestore();

export { db }