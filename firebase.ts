import { getApp,getApps,initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAY5QcX5KlAZcqLfkT2UIJCwilA7QX7Yrw",
    authDomain: "files-for-all.firebaseapp.com",
    projectId: "files-for-all",
    storageBucket: "files-for-all.appspot.com",
    messagingSenderId: "192222957333",
    appId: "1:192222957333:web:ccab47d6146fdf63d0231c"
  };

  const app = getApps().length ? getApp(): initializeApp(firebaseConfig)

  const db = getFirestore(app)
  const storage = getStorage(app)

  export {
    db,storage
  }