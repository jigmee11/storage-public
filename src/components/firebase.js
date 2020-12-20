import firebase from 'firebase'
import 'firebase/firestore'

firebase.initializeApp({
    apiKey: "AIzaSyARiSiVqRA0n_Jya0CPWvI3ToNOTh3BqoQ",
    authDomain: "storage-public.firebaseapp.com",
    projectId: "storage-public",
    storageBucket: "storage-public.appspot.com",
    messagingSenderId: "881046461768",
    appId: "1:881046461768:web:ae06e66fbc231c6a12677d"
});

let db = firebase.firestore()
let storage = firebase.storage();

export {
    firebase, db, storage
}