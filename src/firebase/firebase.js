import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAfeeHdjnfUeDGEPC7G6EIU09ceZx8pzxY",
  authDomain: "la-tienda-de-la-abuela-b-957e8.firebaseapp.com",
  projectId: "la-tienda-de-la-abuela-b-957e8",
  storageBucket: "la-tienda-de-la-abuela-b-957e8.appspot.com",
  messagingSenderId: "285273966641",
  appId: "1:285273966641:web:3b5d35088f00e4f27bed10",
};

const app = firebase.initializeApp(firebaseConfig);

export function getFirebase() {
  return app;
}

export const database = firebase.firestore();
