import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCA7JXZKo2sUvj4hHbhvfCKTg0DbdDlWME",
  authDomain: "chatapplication-fedea.firebaseapp.com",
  projectId: "chatapplication-fedea",
  storageBucket: "chatapplication-fedea.appspot.com",
  messagingSenderId: "237311222607",
  appId: "1:237311222607:web:2886b835790365a4cadb3a",
  measurementId: "G-PK31LL1BQM"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()