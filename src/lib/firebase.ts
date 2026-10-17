
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD22IdxzKhrOJSpEyxzZSXDuSLUhgEkYV8",
  authDomain: "mainnasglam-beauty.firebaseapp.com",
  projectId: "mainnasglam-beauty",
  storageBucket: "mainnasglam-beauty.firebasestorage.app",
  messagingSenderId: "598873024219",
  appId: "1:598873024219:web:6a91bc92a2d9a59ac34efe",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
