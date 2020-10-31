// npm i firebase --> 1st
import firebase from 'firebase';

// connected firebase with our front-end
const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyC_0iCv3p1S87nLSc5KquOnGbsCRh9Pg2Q',
  authDomain: 'clone-d3a1a.firebaseapp.com',
  databaseURL: 'https://clone-d3a1a.firebaseio.com',
  projectId: 'clone-d3a1a',
  storageBucket: 'clone-d3a1a.appspot.com',
  messagingSenderId: '998612004315',
  appId: '1:998612004315:web:32653363b9dc7e30ad4bfe',
  measurementId: 'G-RLXCHPY34V',
});

const auth = firebase.auth();
const db = firebaseApp.firestore();

export { auth, db };
