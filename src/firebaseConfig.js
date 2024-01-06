// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDywN7xn3o3FNWv8fd9XZX2hPC_Jc8wV68",
  authDomain: "preneur-network.firebaseapp.com",
  projectId: "preneur-network",
  storageBucket: "preneur-network.appspot.com",
  messagingSenderId: "86179147163",
  appId: "1:86179147163:web:68d413b87def9487a2053e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, app };
