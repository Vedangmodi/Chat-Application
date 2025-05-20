// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDvphC5rKNO1NwyQ64BFL_Y6-2rCpKkaOk",
  authDomain: "chatapp-71ab2.firebaseapp.com",
  projectId: "chatapp-71ab2",
  storageBucket: "chatapp-71ab2.firebasestorage.app",
  messagingSenderId: "225965397214",
  appId: "1:225965397214:web:9ddaaffc0c0032d0231e4f",
  measurementId: "G-72PMZV24BG"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);