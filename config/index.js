import app from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/database"
import "firebase/compat/storage"

const firebaseConfig = {
  apiKey: "AIzaSyAC9SLHbkXdyC7mbNGe_ecCjD66V0DNziU",
  authDomain: "react-native-auth-6b72a.firebaseapp.com",
  databaseURL: "https://react-native-auth-6b72a-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "react-native-auth-6b72a",
  storageBucket: "react-native-auth-6b72a.appspot.com",
  messagingSenderId: "1099376936728",
  appId: "1:1099376936728:web:a2de9ee42e2b8d94e1006d",
  measurementId: "G-NNKN8CW5R5"
};

export default initFirebase = app.initializeApp(firebaseConfig);
