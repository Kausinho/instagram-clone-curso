import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getFunctions } from 'firebase/functions';

const firebaseApp = {
    apiKey: "AIzaSyAGvT0sFLUkqvgIZSxhhMb5ivT_2agfwvE",
    authDomain: "instagram-clone-curso-6e1da.firebaseapp.com",
    projectId: "instagram-clone-curso-6e1da",
    storageBucket: "instagram-clone-curso-6e1da.appspot.com",
    messagingSenderId: "146019468880",
    appId: "1:146019468880:web:818ab62aa1dea29418f355",
    measurementId: "G-Z91YV726HJ"
  };

  const app = initializeApp(firebaseApp);
  const db = getFirestore(app);
  const auth = getAuth(app);
  const storage = getStorage(app);
  const functions = getFunctions(app);
  
  export {db, auth, storage, functions, app};