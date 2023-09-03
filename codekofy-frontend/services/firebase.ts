// Import the functions you need from the SDKs you need
import { app } from "@/firebase/firebaseConfig";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const db = getFirestore(app);
const auth = getAuth(app);
