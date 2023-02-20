import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC0RL4Dwa6k3MxaAWMDDcT32WeeWFnySv8",

  authDomain: "music-633da.firebaseapp.com",

  projectId: "music-633da",

  storageBucket: "music-633da.appspot.com",

  appId: "1:338857864896:web:76a70974b953d652b50725",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

db.enablePersistence().catch((error) => {
  console.log(`Firebase persitance error ${error.code}`);
});

const usersCollection = db.collection("users");
const songsCollection = db.collection("songs");
const commentsCollection = db.collection("comments");

export {
  auth,
  db,
  usersCollection,
  storage,
  songsCollection,
  commentsCollection,
};
