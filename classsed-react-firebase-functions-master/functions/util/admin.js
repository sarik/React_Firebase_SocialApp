const admin = require('firebase-admin');

var config = {
    apiKey: "AIzaSyAR25l1f9EgLxgCfPaI7pZzyUSa5d-00so",
    authDomain: "omix-207f4.firebaseapp.com",
    databaseURL: "https://omix-207f4.firebaseio.com",
    projectId: "omix-207f4",
    storageBucket: "omix-207f4.appspot.com",
    messagingSenderId:"419120328473",
    appId:"1:419120328473:web:74a45730efe00a30",
  };
admin.initializeApp(config);

const db = admin.firestore();

module.exports = { admin, db };
