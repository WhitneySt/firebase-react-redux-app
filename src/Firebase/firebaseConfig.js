// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBAcp6daIhpxnZaXitcAnR2s0LvIsc0Aco",
  authDomain: "fir-react-redux-app-f7.firebaseapp.com",
  projectId: "fir-react-redux-app-f7",
  storageBucket: "fir-react-redux-app-f7.appspot.com",
  messagingSenderId: "55470937260",
  appId: "1:55470937260:web:f59eb4adcdf15229797b09",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

