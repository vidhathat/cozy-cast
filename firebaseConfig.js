import { initializeApp } from 'firebase/app';

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";
import { getFirestore, collection, getDocs } from 'firebase/firestore';
// import { getDatabase } from "firebase/database";


// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDTxkuM2yYka1dY999VVUBR3c-wqkJtye8",
    authDomain: "cozy-cast.firebaseapp.com",
    projectId: "cozy-cast",
    storageBucket: "cozy-cast.appspot.com",
    messagingSenderId: "259826318977",
    appId: "1:259826318977:web:3828145a64b56df99e5780",
    measurementId: "G-T2WV2MX1Z9"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
