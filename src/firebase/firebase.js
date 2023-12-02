// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore , collection } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCFZCjYe1Q4gKAarNdqrUG-3XM-YDZm_nY",
  authDomain: "assignment-sharpe-ai.firebaseapp.com",
  projectId: "assignment-sharpe-ai",
  storageBucket: "assignment-sharpe-ai.appspot.com",
  messagingSenderId: "573289645400",
  appId: "1:573289645400:web:cf080779237c3d8f17912d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
 export const transactionsRef = collection(db,"transactions");

 export default app;