// v9 compat packages are API compatible with v8 code
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

firebase.initializeApp({
  apiKey: "AIzaSyC6yIW3abVDd18rLv_dIHgpjM_l1dZUVd0",
  authDomain: "fir-project-2fe66.firebaseapp.com",
  projectId: "fir-project-2fe66",
  storageBucket: "fir-project-2fe66.appspot.com",
  messagingSenderId: "932285463227",
  appId: "1:932285463227:web:4fdde48d03ec11df56879e",
});
export default firebase;
