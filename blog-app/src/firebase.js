 import { initializeApp } from "firebase/app";
 import { getAuth } from "firebase/auth";
 import { getFirestore } from "@firebase/firestore";
 import "firebase/database";

//  TODO: Add SDKs for Firebase products that you want to use
//  https://firebase.google.com/docs/web/setup#available-libraries

 const firebaseConfig = {
   apiKey: "AIzaSyB7LxQXi1Zu-4mhyqeALDEdANPNiIbwivc",
   authDomain: "apprenticenowblog.firebaseapp.com",
   projectId: "apprenticenowblog",
   storageBucket: "apprenticenowblog.appspot.com",
   messagingSenderId: "776744699243",
   appId: "1:776744699243:web:d33a3dcbd5979b839b382e",
 };

 const app = initializeApp(firebaseConfig);
 const auth = getAuth(app);
 const db = getFirestore(app);
 export { auth, db };
