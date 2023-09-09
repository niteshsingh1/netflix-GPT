// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8HeTcb9uvMszgehpcMS9TvtTMqocicNM",
  authDomain: "netflixgpt-f9f54.firebaseapp.com",
  projectId: "netflixgpt-f9f54",
  storageBucket: "netflixgpt-f9f54.appspot.com",
  messagingSenderId: "226562429801",
  appId: "1:226562429801:web:f87b8fdb3009a14d75a3f8",
  measurementId: "G-Y0CKMBPB3V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
