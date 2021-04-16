import  firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/storage'
var firebaseConfig = {
    apiKey: "AIzaSyDarDGdCNhTGUIK1gfoXRmhzMadvooSa-s",
    authDomain: "firegram-40d66.firebaseapp.com",
    projectId: "firegram-40d66",
    storageBucket: "firegram-40d66.appspot.com",
    messagingSenderId: "911681661423",
    appId: "1:911681661423:web:39c6a1ab1a245c4858ae1a"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectFirestore = firebase.firestore()
  const projectStorage = firebase.storage()
  const timestamps = firebase.firestore.FieldValue.serverTimestamp

  export {projectStorage , projectFirestore , timestamps}