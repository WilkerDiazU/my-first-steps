// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {

  apiKey: "AIzaSyC7cE80Yvx7Xmsqf-IUa9Y4S6uu17KPsBY",
  authDomain: "fb-react-w.firebaseapp.com",
  databaseURL: "https://fb-react-w.firebaseio.com",
  projectId: "fb-react-w",
  storageBucket: "fb-react-w.appspot.com",
  messagingSenderId: "1040115774756",
  appId: "1:1040115774756:web:277ce1c2af237d307c6fb1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
