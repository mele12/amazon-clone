




// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from 'firebase';
const firebaseConfig = {
  apiKey: "AIzaSyBqFgPwB_2Wxe9c2YoC0PoZCm_cNtKZjA0",
  authDomain: "mk-528aa.firebaseapp.com",
  projectId: "mk-528aa",
  storageBucket: "mk-528aa.appspot.com",
  messagingSenderId: "252038842748",
  appId: "1:252038842748:web:759cdda862889641e6bcf9",
  measurementId: "G-1522Q84E3D"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };