import firebase from 'firebase/app';
import 'firebase/firestore';

const firestore = firebase.firestore();

const users = firestore
  .collection('users')
  .doc('b54LRaWpz5c2EA0cthaU')
  .collection('cartItems')
  .doc('8U7EZI7NKLA77ggVBk5J');
console.log(users);
