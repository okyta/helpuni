// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDjNVXntMf8Z36F1SIl7boyz-I8y2GhXLk',
  authDomain: 'helpuni-d0837.firebaseapp.com',
  projectId: 'helpuni-d0837',
  storageBucket: 'helpuni-d0837.appspot.com',
  messagingSenderId: '676046465134',
  appId: '1:676046465134:web:11a10150362867f18c1e7f',
  measurementId: 'G-PTVM5YFMEN',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
