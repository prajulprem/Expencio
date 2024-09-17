// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCn0qhjJviDB1lCXoL4CraWU9bc4mCM9nU",
  authDomain: "expencio.firebaseapp.com",
  projectId: "expencio",
  storageBucket: "expencio.appspot.com",
  messagingSenderId: "588608475378",
  appId: "1:588608475378:web:a218195abd68ba133c806b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export {app, db}