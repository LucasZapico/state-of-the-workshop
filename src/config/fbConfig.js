import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyCWMnyrXcD7V8RIHKL_s6lhbAUQjitNNsA',
  authDomain: 'my-workflow-3c2fe.firebaseapp.com',
  databaseURL: 'https://my-workflow-3c2fe.firebaseio.com',
  projectId: 'my-workflow-3c2fe',
  storageBucket: '',
  messagingSenderId: '698312945656',
  appId: '1:698312945656:web:7d4cf687d2caf44992700d',
  measurementId: 'G-BTNWML99QW'
};
// Initialize Firebase
try {
  firebase.initializeApp(firebaseConfig);
  firebase.firestore();

  console.log('firebase up and running');
  const db = firebase.firestore();
  console.log(db.collection('items').get());
  firebase
    .firestore()
    .collection('items')
    .get()
    .then(querySnapshot => {
      querySnapshot.forEach(docs => {
          
      })
      
    });
} catch (err) {
  console.log('error initializing firebase', err);
}
export default firebase;