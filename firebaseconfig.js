  "use strict";
// Your web app's Firebase configuration
const _firebaseConfig = {
    apiKey: "AIzaSyCpb0OF-Co5wJU3PRvBwWIqtp71yOi25wY",
    authDomain: "arla-ux.firebaseapp.com",
    databaseURL: "https://arla-ux.firebaseio.com",
    projectId: "arla-ux",
    storageBucket: "arla-ux.appspot.com",
    messagingSenderId: "333480570558",
    appId: "1:333480570558:web:ab212ac76f48f0d92ab8ef"
};
// Initialize Firebase and database references
firebase.initializeApp(_firebaseConfig);
const db = firebase.firestore();