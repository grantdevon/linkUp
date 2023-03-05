// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { Platform } from "react-native";
import {
  Firestore,
  enableIndexedDbPersistence,
  getFirestore,
  initializeFirestore,
} from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// turn into env var
const firebaseConfig = {
  apiKey: "AIzaSyA7o3ZpM_LFyMhmUUznIxyMRrCLds96zSI",
  authDomain: "linkup-62dd9.firebaseapp.com",
  projectId: "linkup-62dd9",
  storageBucket: "linkup-62dd9.appspot.com",
  messagingSenderId: "667141008081",
  appId: "1:667141008081:web:e1fe9405327315a66773f0",
  measurementId: "G-JM9XHZR3KM"
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


// enableIndexedDbPersistence(db)
//   .catch((err) => {
//     if (err.code == 'failed-precondition') {
//       // Multiple tabs open, persistence can only be enabled
//       // in one tab at a a time.
//       // ...
//     } else if (err.code == 'unimplemented') {
//       // The current browser does not support all of the
//       // features required to enable persistence
//       // ...
//     }
//   });




export { auth, db }
