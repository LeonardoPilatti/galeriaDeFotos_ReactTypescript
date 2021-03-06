import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';


//// esse process.env está vindo do arquivo .env.local pq ele é ignorado;
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSEAGINGSENDERID,
  appId: process.env.REACT_APP_FIREBASE_APPID,
};

const firebaseApp = initializeApp(firebaseConfig);

export const storage = getStorage(firebaseApp);