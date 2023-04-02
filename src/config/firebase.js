import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite"

const firebaseConfig = {
  apiKey: "AIzaSyBEnIO9xPGjoGrX9KxLl7zzPNX6ZPnVKzo",
  authDomain: "tiktok-clone---jornada-d-1fb3b.firebaseapp.com",
  projectId: "tiktok-clone---jornada-d-1fb3b",
  storageBucket: "tiktok-clone---jornada-d-1fb3b.appspot.com",
  messagingSenderId: "531275850576",
  appId: "1:531275850576:web:89a77981af1ea7dea64255"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;