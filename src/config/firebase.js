import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite"

const firebaseConfig = {
  apiKey: "AIzaSyCJzaupCBJJjqgNAUAwL763yPHUBpVNnQ4",
  authDomain: "tik-tok---jornada-dev-ebac.firebaseapp.com",
  projectId: "tik-tok---jornada-dev-ebac",
  storageBucket: "tik-tok---jornada-dev-ebac.appspot.com",
  messagingSenderId: "630565821178",
  appId: "1:630565821178:web:6fd49c01e165e0536d8743",
  measurementId: "G-B3Y1K1JGNR"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;