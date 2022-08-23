import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

//firebase config
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyC63KfcBgPvhM5SkhKKbH8Zmk2VvCMbPoQ",
    authDomain: "chatapp-995b1.firebaseapp.com",
    projectId: "chatapp-995b1",
    storageBucket: "chatapp-995b1.appspot.com",
    messagingSenderId: "728401030607",
    appId: "1:728401030607:web:cfd99d25a0168ee3b2b6ba",
    measurementId: "G-MPJ09Z8DYS"
})

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
