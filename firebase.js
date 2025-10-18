// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyCCOUhkqJILjR1qmfmQAfmQ-WkeSvnIFR0",
  authDomain: "invest-9731f.firebaseapp.com",
  projectId: "invest-9731f",
  storageBucket: "invest-9731f.appspot.com",
  messagingSenderId: "1054310074316",
  appId: "1:1054310074316:web:73a51c619d03a67c873f69",
  measurementId: "G-XHBM842TER"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { app, auth, db, storage };
