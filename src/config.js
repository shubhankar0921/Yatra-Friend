import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyASzsxA7oAEIVBnl_aY5oA-yiDHcsskaNY",
    authDomain: "yatra-friend.firebaseapp.com",
    projectId: "yatra-friend",
    storageBucket: "yatra-friend.appspot.com",
    messagingSenderId: "743586780394",
    appId: "1:743586780394:web:85121cb60263f59ab97393"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)