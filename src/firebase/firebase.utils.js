import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAMU_zfoGqZOKwJDII7-Zcj1hV1Rq6ceiE',
  authDomain: 'crwn-clothing-3d516.firebaseapp.com',
  projectId: 'crwn-clothing-3d516',
  storageBucket: 'crwn-clothing-3d516.appspot.com',
  messagingSenderId: '509886122829',
  appId: '1:509886122829:web:c76982c6e6b44fa4200504',
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
