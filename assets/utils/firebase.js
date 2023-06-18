// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_G3stvv-FYDmtSGkNvuDinQfJbAc7jVs",
  authDomain: "mybooks-f2329.firebaseapp.com",
  projectId: "mybooks-f2329",
  storageBucket: "mybooks-f2329.appspot.com",
  messagingSenderId: "111041851156",
  appId: "1:111041851156:web:b2976f36a43e2083825c01",
  measurementId: "G-471GDE9PYV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);