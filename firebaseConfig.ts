import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getFunctions, connectFunctionsEmulator } from "firebase/functions";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: "",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const functions = getFunctions(app);

// Yerel geliştirme sırasında emülatör için
// if (__DEV__) {
//   connectFunctionsEmulator(functions, "localhost", 5001);
// }

export { db, functions };
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
