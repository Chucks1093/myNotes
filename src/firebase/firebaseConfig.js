import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

// const firebaseConfig = {
//     apiKey: "AIzaSyBfXN4byANxS9rjFSsbrSyMYcC2kiB9RfE",
//     authDomain: "questions-94336.firebaseapp.com",
//     databaseURL: "https://questions-94336-default-rtdb.firebaseio.com",
//     projectId: "questions-94336",
//     storageBucket: "questions-94336.appspot.com",
//     messagingSenderId: "303413714981",
//     appId: "1:303413714981:web:b196252413ff4b0c0e1fcc"
// };


// const firebaseConfig = {
//     apiKey: "AIzaSyBfXN4byANxS9rjFSsbrSyMYcC2kiB9RfE",
//     authDomain: "questions-94336.firebaseapp.com",
//     databaseURL: "https://questions-94336-default-rtdb.firebaseio.com",
//     projectId: "questions-94336",
//     storageBucket: "questions-94336.appspot.com",
//     messagingSenderId: "303413714981",
//     appId: "1:303413714981:web:b196252413ff4b0c0e1fcc"
// };

const app = initializeApp(firebaseConfig);

export default app;