import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyBHGtej042HySzJXDCWmeBrvj0mfPAH2TA',
  authDomain: 'portfolio-3a628.firebaseapp.com',
  projectId: 'portfolio-3a628',
  storageBucket: 'portfolio-3a628.appspot.com',
  messagingSenderId: '448059856856',
  appId: '1:448059856856:web:a962c98f4ffff58b2e04ad',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
