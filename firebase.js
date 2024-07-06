// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA0ladP6735uaOlLWyurdqAlbKk2KLRsrA",
  authDomain: "my-portfolio-7c5de.firebaseapp.com",
  projectId: "my-portfolio-7c5de",
  storageBucket: "my-portfolio-7c5de.appspot.com",
  messagingSenderId: "20871677266",
  appId: "1:20871677266:web:3087ff81e76bc5d665e68b",
  measurementId: "G-Y11PJW013G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);