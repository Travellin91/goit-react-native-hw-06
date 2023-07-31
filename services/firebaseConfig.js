import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCqyid8WN_Ft3F2z09Tk0KJdWbGk7U6U3g",
  authDomain: "cock-96826.firebaseapp.com",
  databaseURL: "https://cock-96826-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "cock-96826",
  storageBucket: "cock-96826.appspot.com",
  messagingSenderId: "666467225522",
  appId: "1:666467225522:web:6810e64131e4024c3c5eab"
};

const authConfig = initializeApp(firebaseConfig);
const auth = getAuth(authConfig);
const db = getFirestore(authConfig);
const storage = getStorage(authConfig);

export { auth, db, storage };