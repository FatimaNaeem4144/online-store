import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
  import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
  } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js';
  import {
    getDatabase,
    set,ref,update
  } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-database.js';
  
  const firebaseConfig = {
    apiKey: "AIzaSyDlE9qchi_g3IznkAT1RHm0Y1DErwJSkrY",
    authDomain: "online-shopping-store-2e578.firebaseapp.com",
    projectId: "online-shopping-store-2e578",
    storageBucket: "online-shopping-store-2e578.appspot.com",
    messagingSenderId: "740616587235",
    appId: "1:740616587235:web:03a57cede716fd1c3402d6",
    measurementId: "G-B3BCEV5SDR"
  };
  const app = initializeApp(firebaseConfig);
  const auth = getAuth();
  const database = getDatabase(app);

  export{
    app,
    auth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    database,
    set,ref,update
  }