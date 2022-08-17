import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";
import { FirebaseApp } from "firebase/app";
import "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7LxQXi1Zu-4mhyqeALDEdANPNiIbwivc",
  authDomain: "apprenticenowblog.firebaseapp.com",
  projectId: "apprenticenowblog",
  storageBucket: "apprenticenowblog.appspot.com",
  messagingSenderId: "776744699243",
  appId: "1:776744699243:web:d33a3dcbd5979b839b382e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export { auth, db };
