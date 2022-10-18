// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCduBi_P5JSQkTxN2ZXNsIEk9GBW1nM0us",
  authDomain: "netflix-clone-redesign-b27f0.firebaseapp.com",
  projectId: "netflix-clone-redesign-b27f0",
  storageBucket: "netflix-clone-redesign-b27f0.appspot.com",
  messagingSenderId: "185448168432",
  appId: "1:185448168432:web:e79843c31145b5d0affb35",
  measurementId: "G-VTWQDRB2XH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
