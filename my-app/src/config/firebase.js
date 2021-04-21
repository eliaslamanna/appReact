import * as firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyBDjzp6pOA77PGqiObCPT5NB-gpXzm4d0A",
  authDomain: "curso-react-utn.firebaseapp.com",
  databaseURL: "https://curso-react-utn.firebaseio.com",
  projectId: "curso-react-utn",
  storageBucket: "curso-react-utn.appspot.com",
  messagingSenderId: "20286753769",
  appId: "1:20286753769:web:9adcdf2f7fad303de15978"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
db.settings({
    timestampsInSnapshots: true
})
firebase.db = db;
firebase.auth = firebase.auth();
export default firebase;