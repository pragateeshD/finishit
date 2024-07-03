import firebase from 'firebase';
  

  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
 apiKey: "AIzaSyDMxcWZzUExd-IE8EocBzum7evvthaNNqc",
  authDomain: "todo-fcb.firebaseapp.com",
  projectId: "todo-fcb",
  storageBucket: "todo-fcb.appspot.com",
  messagingSenderId: "346244594267",
  appId: "1:346244594267:web:9abd1545dd6db4e521dd7e",
  measurementId: "G-E0JCNBB081"
  };

  
firebase.initializeApp(firebaseConfig);
var auth = firebase.auth();
var provider = new firebase.auth.GoogleAuthProvider(); 
export {auth , provider};
export default firebase;
