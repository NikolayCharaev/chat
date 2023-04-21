import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

import { GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth';

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
const app = initializeApp(firebaseConfig); // инициализация сервера с регистрацией своего ключа
const analytics = getAnalytics(app); // хз

export async function authGoogle() {
  try {
    const provider = new GoogleAuthProvider(); // Генерирует учетную запись Google
    const auth = getAuth(); // Возвращает экземпляр Firebase Authentication

    const { user } = await signInWithPopup(auth, provider); // Передаем эти 2 объекта в signInWithPopup который обрабатывает поток входа и возвращает информацию об аутентифицироанном пользователе после его аутентификации.
    return { uid: user.uid, displayName: user.displayName };
  } catch (err: any) {
    if (err.code !== 'auth/cancelled-popup-request') {
      console.error(err);
    }

    return null;
  }
}
