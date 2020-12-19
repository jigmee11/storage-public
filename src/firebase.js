import firebase from 'firebase'
import 'firebase/firestore'

firebase.initializeApp({
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: ""
});

let db = firebase.firestore()
let storage = firebase.storageBucket()

export {
    firebase, db, storage
}