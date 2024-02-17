import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  apiKey: "AIzaSyB2WLnwIhXEP3ueUi9_Lcmc903ihSIwhSE",
  authDomain: "fb-dm-messenger.firebaseapp.com",
  projectId: "fb-dm-messenger",
  storageBucket: "fb-dm-messenger.appspot.com",
  messagingSenderId: "55226421287",
  appId: "1:55226421287:web:83ddd9988587e275b93e02",
  measurementId: "G-CNCWJRQV6Q",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
export default firebase;
