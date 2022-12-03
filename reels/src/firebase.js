// v9 compat packages are API compatible with v8 code
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/storage'
import 'firebase/compat/firestore';
firebase.initializeApp({
    apiKey: "AIzaSyB11DmEgOWTwjfw1r6APpJumyokJoRFPQo",
    authDomain: "reels-3aedf.firebaseapp.com",
    projectId: "reels-3aedf",
    storageBucket: "reels-3aedf.appspot.com",
    messagingSenderId: "303954249199",
    appId: "1:303954249199:web:527816b34ac58933f2221a"
  })
 
  const firestore = firebase.firestore();
  //users data like posts,comment,likes will be store here
  export const auth = firebase.auth();
  export const database={
    users:firestore.collection('users'),
    getCurrentTimeStamp : firebase.firestore.FieldValue.serverTimestamp
  }
  //It store the files like images,videos in hardware
  export const storage = firebase.storage();