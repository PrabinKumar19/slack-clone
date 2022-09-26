import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-xmfftUJa-ozyG7Erncnf5eEp2DyW1l4",
  authDomain: "slack-clone-33255.firebaseapp.com",
  projectId: "slack-clone-33255",
  storageBucket: "slack-clone-33255.appspot.com",
  messagingSenderId: "1001369529773",
  appId: "1:1001369529773:web:653d481723a863b0c8c524",
  measurementId: "G-MMCN7FH7RE",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, db, provider };
