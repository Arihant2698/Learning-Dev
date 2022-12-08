import firebase from "firebase/app"
import "firebase/auth"
import 'firebase/storage'
import 'firebase/firestore'

firebase.initializeApp(
    {
        apiKey: "AIzaSyB11DmEgOWTwjfw1r6APpJumyokJoRFPQo",
    authDomain: "reels-3aedf.firebaseapp.com",
    projectId: "reels-3aedf",
    storageBucket: "reels-3aedf.appspot.com",
    messagingSenderId: "303954249199",
    appId: "1:303954249199:web:527816b34ac58933f2221a"
 }
)
export const auth = firebase.auth();
const firestore = firebase.firestore();
export const database ={
    users:firestore.collection('users'),
    posts:firestore.collection('posts'),
    getCurrentTimeStamp : firebase.firestore.FieldValue.serverTimestamp
}
export const storage = firebase.storage();
// export default firebase;