import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyB-2aCcFydjNYT23h3XQmTncIPcF1gEPE0",
  authDomain: "clone-7a28b.firebaseapp.com",
  databaseURL: "https://clone-7a28b.firebaseio.com",
  projectId: "clone-7a28b",
  storageBucket: "clone-7a28b.appspot.com",
  messagingSenderId: "612557102144",
  appId: "1:612557102144:web:6f0a8875da8493294693a5",
  measurementId: "G-H8VKGZXK8T",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
