import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA80-vUyXDxE_shTO9-VSFKMcw3sCwZUS4",
  authDomain: "nasa-api-9a975.firebaseapp.com",
  projectId: "nasa-api-9a975",
  storageBucket: "nasa-api-9a975.appspot.com",
  messagingSenderId: "977463080644",
  appId: "1:977463080644:web:abf9be3fb68f3439393b91",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const googleAuthProvider = new GoogleAuthProvider();

export default app;
