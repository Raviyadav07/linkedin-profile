import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyB8hmsP5EK425EwF1aOaYlDrp79vY1W3Tw",
  authDomain: "linkedin-42bf9.firebaseapp.com",
  projectId: "linkedin-42bf9",
  storageBucket: "linkedin-42bf9.appspot.com",
  messagingSenderId: "368231557445",
  appId: "1:368231557445:web:8ca1b8ff638c75c342362c",
  measurementId: "G-EZVGMBE6ZY"
};


//This special line of code here connects everything
const firebaseApp = firebase.initializeApp(firebaseConfig);

//gets the firestore database
const db = firebaseApp.firestore();

//we want to use firebase authentication
const auth = firebase.auth();
export { db, auth }