// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyABDUjRMnoQ_BvTbNo69eBNdgAbVybDIq0",
  authDomain: "my-9a5f3.firebaseapp.com",
  projectId: "my-9a5f3",
  storageBucket: "my-9a5f3.appspot.com",
  messagingSenderId: "1058552083419",
  appId: "1:1058552083419:web:63bbc5c55e154e99aeedfe",
  measurementId: "G-23R8VWQ8GN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
