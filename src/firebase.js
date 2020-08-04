import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDGgDULpGNYk91hc2tCJhmVrqk01DBHeLI",
  authDomain: "friendzone-codelad.firebaseapp.com",
  databaseURL: "https://friendzone-codelad.firebaseio.com",
  projectId: "friendzone-codelad",
  storageBucket: "friendzone-codelad.appspot.com",
  messagingSenderId: "444548328066",
  appId: "1:444548328066:web:311689a51de79e8d01a29b",
  measurementId: "G-6MT3BMELJ6",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

//initiating references to the databases
const usersRef = db.collection("users");

// for privileges purposes
const functions = firebase.functions();

//google provider sign-in
const googleProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, db, auth, storage, googleProvider };
