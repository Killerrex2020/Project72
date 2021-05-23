import firebase from 'firebase'
require("@firebase/firestore")

var firebaseConfig = {
    apiKey: "AIzaSyCxkhQR-3a-zQFU1EYVA_R65_HGo2xuos8",
    authDomain: "elon-musk-is-a-noob.firebaseapp.com",
    projectId: "elon-musk-is-a-noob",
    storageBucket: "elon-musk-is-a-noob.appspot.com",
    messagingSenderId: "942162035303",
    appId: "1:942162035303:web:79c46b1d79dd492ec60ac2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();