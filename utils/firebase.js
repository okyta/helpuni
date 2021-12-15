import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

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

if (typeof window !== 'undefined') {
  const analytics = getAnalytics(app);
}
