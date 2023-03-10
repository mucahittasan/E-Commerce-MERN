// Imports
const firestoreService = require("firestore-export-import")
const firebaseConfig = require('./uploader.js')
const serviceAccount = require('./serviceAccount.json')


// JSON To Firestore
const jsonToFirestore = async () => {
  try {
    console.log('Initialzing Firebase');
    await firestoreService.initializeFirebaseApp(serviceAccount, firebaseConfig.databaseURL);
    console.log('Firebase Initialized');

    await firestoreService.restore('../../data/db.json');
    console.log('Upload Success');
  }
  catch (error) {
    console.log(error);
  }
};

jsonToFirestore();