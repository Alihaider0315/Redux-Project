// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
    doc,
    setDoc,
    collection,
    getFirestore,
    addDoc,
    getDoc,
    getDocs,
    deleteDoc,
} from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBObjTKPn-BLWnLzTh3xSCnUA9enZvazoI",
    authDomain: "redux-ecommerce-61e2f.firebaseapp.com",
    projectId: "redux-ecommerce-61e2f",
    storageBucket: "redux-ecommerce-61e2f.appspot.com",
    messagingSenderId: "666534624954",
    appId: "1:666534624954:web:df4b6aa98872618f024c83",
    measurementId: "G-DV67W6JW6L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firestore
const db = getFirestore(app);

// db collection
const dbCollection = collection(db, "cartItems");

export default {
    doc,
    setDoc,
    db,
    dbCollection,
    addDoc,
    getDoc,
    getDocs,
    deleteDoc,
};
