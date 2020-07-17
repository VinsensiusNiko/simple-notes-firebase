import firebase from 'firebase/app';
import 'firebase/auth';
// import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyAn8f-m7jALR96y9adGmn7Ym5pRUd1Cj-8",
    authDomain: "simple-notes-firebase-vinsen.firebaseapp.com",
    databaseURL: "https://simple-notes-firebase-vinsen.firebaseio.com",
    projectId: "simple-notes-firebase-vinsen",
    storageBucket: "simple-notes-firebase-vinsen.appspot.com",
    messagingSenderId: "84345848063",
    appId: "1:84345848063:web:bc9182dfd611c36b584cca",
    measurementId: "G-GZHPYZQT73"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;