// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCA7JXZKo2sUvj4hHbhvfCKTg0DbdDlWME',
  authDomain: 'chatapplication-fedea.firebaseapp.com',
  projectId: 'chatapplication-fedea',
  storageBucket: 'chatapplication-fedea.appspot.com',
  messagingSenderId: '237311222607',
  appId: '1:237311222607:web:2886b835790365a4cadb3a',
  measurementId: 'G-PK31LL1BQM',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
