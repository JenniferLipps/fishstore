import firebase from 'firebase/app';
import firebaseConfig from '../apiKeys.json';

const firebaseApp = () => {
  // if no firebase apps have been initialized in this browser:
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig.firebaseKeys);
  }
};

export default firebaseApp;
