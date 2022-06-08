// import firebase from "firebase/app";

// import { getAnalytics } from "firebase/analytics";

// const firebaseConfig = {
//   apiKey: "AIzaSyC1lPehG4N7UrOBLewctl_7KOageV7_cNc",
//   authDomain: "bookapppro-58ade.firebaseapp.com",
//   projectId: "bookapppro-58ade",
//   storageBucket: "bookapppro-58ade.appspot.com",
//   messagingSenderId: "649736637049",
//   appId: "1:649736637049:web:3723405bf2a7062e6222a8",
//   measurementId: "G-3LH1Q0Z525",
// };

// // Initialize Firebase
// let app;
// if (firebase.apps.length === 0) {
//   app = initializeApp(firebaseConfig);
// } else {
//   app = firebase.app();
// }

// const auth = firebase.auth();

// const analytics = getAnalytics(app);

// export { auth };

// Import the functions you need from the SDKs you need

// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getFirestore, setDoc, doc } from "firebase/firestore";
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyAJJvopfhHctfmiId2nd0krZC_CNHYd3DY",
//   authDomain: "bookapp2-2effa.firebaseapp.com",
//   projectId: "bookapp2-2effa",
//   storageBucket: "bookapp2-2effa.appspot.com",
//   messagingSenderId: "27402011932",
//   appId: "1:27402011932:web:ac86bd1e78f59d7249a6d9",
//   measurementId: "G-3J60WWDTS5",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// export const authentication = getAuth(app);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1lPehG4N7UrOBLewctl_7KOageV7_cNc",
  authDomain: "bookapppro-58ade.firebaseapp.com",
  projectId: "bookapppro-58ade",
  storageBucket: "bookapppro-58ade.appspot.com",
  messagingSenderId: "649736637049",
  appId: "1:649736637049:web:3723405bf2a7062e6222a8",
  measurementId: "G-3LH1Q0Z525",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const provider = new GoogleAuthProvider(app);
export const authentication = getAuth(app);
