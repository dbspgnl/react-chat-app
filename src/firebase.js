import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyAaCK8yYrrrpxVfp_Ee8fPyCY3_73Lhrlg",
  authDomain: "react-chat-app-fb008.firebaseapp.com",
  projectId: "react-chat-app-fb008",
  storageBucket: "react-chat-app-fb008.appspot.com",
  messagingSenderId: "726868812621",
  appId: "1:726868812621:web:64b222b799d7d8df898d04",
  measurementId: "G-T92MX6QQNP",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();
