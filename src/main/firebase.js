import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyA1ab4Ra-WMu0gJ-G40tKNUsHeo1XQyYxM",
    authDomain: "koppelvibz-68857.firebaseapp.com",
    databaseURL: "https://koppelvibz-68857-default-rtdb.firebaseio.com",
    projectId: "koppelvibz-68857",
    storageBucket: "koppelvibz-68857.appspot.com",
    messagingSenderId: "743732010153",
    appId: "1:743732010153:web:483fbb2f74be7230a3ddb8",
    measurementId: "G-DWS6TV8JLT"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
