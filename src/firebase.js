import firebase from "firebase";

// Your web app's Firebase configuration
// Initialize Firebase
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDGgDULpGNYk91hc2tCJhmVrqk01DBHeLI",
  authDomain: "friendzone-codelad.firebaseapp.com",
  databaseURL: "https://friendzone-codelad.firebaseio.com",
  projectId: "friendzone-codelad",
  storageBucket: "friendzone-codelad.appspot.com",
  messagingSenderId: "444548328066",
  appId: "1:444548328066:web:311689a51de79e8d01a29b",
  measurementId: "G-6MT3BMELJ6",
});

const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
