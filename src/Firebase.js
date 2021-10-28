import firebase from "firebase/compat";

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

export default firebase;