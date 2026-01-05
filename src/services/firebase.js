import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAObaJvnQxkQIp4l9DhcYtE7vi06gQ4i9Q", // ← CELLE DE FIREBASE
  authDomain: "campusuni-c1d4e.firebaseapp.com",
  projectId: "campusuni-c1d4e",
  storageBucket: "campusuni-c1d4e.appspot.com",
  messagingSenderId: "226683360582",
  appId: "1:226683360582:web:17716f8bb471493576c147",
};

// éviter duplicate app
const app = getApps().length === 0
  ? initializeApp(firebaseConfig)
  : getApp();

export const auth = getAuth(app);
