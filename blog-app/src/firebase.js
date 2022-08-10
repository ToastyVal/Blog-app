import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth} from "firebase/auth";
import {getFirestore} from '@firebase/firestore';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB7LxQXi1Zu-4mhyqeALDEdANPNiIbwivc",
    authDomain: "apprenticenowblog.firebaseapp.com",
    projectId: "apprenticenowblog",
    storageBucket: "apprenticenowblog.appspot.com",
    messagingSenderId: "776744699243",
    appId: "1:776744699243:web:d33a3dcbd5979b839b382e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider(app);
const auth = getAuth(app);
 const db = getFirestore(app);






export { provider, auth, db};