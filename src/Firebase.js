import firebase from "firebase/compat";
import "firebase/auth";
import "firebase/firestore";
import 'firebase/storage';

const config = {
    apiKey: "AIzaSyCpJh8sHKHA4kk2AV2lYc02oj7HU1oJKiQ",
    authDomain: "dark-sl.firebaseapp.com",
    databaseURL: "https://dark-sl-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "dark-sl",
    storageBucket: "dark-sl.appspot.com",
    messagingSenderId: "985985339324",
    appId: "1:985985339324:web:a7f3e5bafe98422e7965b9",
    measurementId: "G-D3DM2YVKXF"
};
// Initialize Firebase
firebase.initializeApp(config);
const db = firebase.firestore();
const storage = firebase.storage();
export  {
    storage, db
}