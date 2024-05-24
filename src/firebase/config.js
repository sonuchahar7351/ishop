
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage'; 

export const firebaseConfig = {
  apiKey: "AIzaSyBDm_f2iHisasc3-GgfAiO5iubDn1gbt6k",
  authDomain: "ishop-18.firebaseapp.com",
  projectId: "ishop-18",
  storageBucket: "ishop-18.appspot.com",
  messagingSenderId: "425777994431",
  appId: "1:425777994431:web:dc759eebb37a1cf292440a"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;