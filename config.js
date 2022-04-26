import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyDhwcW4pk6n0nBmpE3adfML-nv4DrQMPXI",
    authDomain: "project-71-d46cb.firebaseapp.com",
    projectId: "project-71-d46cb",
    storageBucket: "project-71-d46cb.appspot.com",
    messagingSenderId: "1035280103124",
    appId: "1:1035280103124:web:92790b42dd80349d2aed41"
  };
  
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
