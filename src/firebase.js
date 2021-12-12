import firebase from 'firebase';

const firebaseApp = {
    apiKey: "AIzaSyAGvT0sFLUkqvgIZSxhhMb5ivT_2agfwvE",
    authDomain: "instagram-clone-curso-6e1da.firebaseapp.com",
    projectId: "instagram-clone-curso-6e1da",
    storageBucket: "instagram-clone-curso-6e1da.appspot.com",
    messagingSenderId: "146019468880",
    appId: "1:146019468880:web:818ab62aa1dea29418f355",
    measurementId: "G-Z91YV726HJ"
  };

  const db = firebase.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();
  const functions = firebase.functions();
  
  export {db, auth, storage, functions};