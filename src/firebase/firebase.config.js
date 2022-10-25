// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCjGXKs6gjSGgWrlZo2SCQ1hPye3ryu7Lg",
    authDomain: "tech-guru-a37d0.firebaseapp.com",
    projectId: "tech-guru-a37d0",
    storageBucket: "tech-guru-a37d0.appspot.com",
    messagingSenderId: "938282364598",
    appId: "1:938282364598:web:89c4f996cf83d6892a8017"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;