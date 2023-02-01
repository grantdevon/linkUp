// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { Platform } from "react-native";
import {
  Firestore,
  getFirestore,
  initializeFirestore,
} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// turn into env var
const firebaseConfig = {
  apiKey: "AIzaSyB0VndKfVu7cQpN0Ikc1yDZ89-Yv1cl5eU",
  authDomain: "linkup-eb05b.firebaseapp.com",
  projectId: "linkup-eb05b",
  storageBucket: "linkup-eb05b.appspot.com",
  messagingSenderId: "695161353202",
  appId: "1:695161353202:web:9f1b25ac8b3ef47792716b",
  measurementId: "G-2VG9G1B7HX"
};

var db: Firestore;


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
Platform.OS !== "ios"
  ? (db = initializeFirestore(app, {
    experimentalForceLongPolling: true,
  }))
  : (db = getFirestore(app));

export {auth, db, analytics}
