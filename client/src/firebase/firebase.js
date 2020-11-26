import firebase from 'firebase/app'
import 'firebase/storage'

var firebaseConfig = {
  apiKey: "AIzaSyB2265Egp7uZ_QlJYRg51T-Dbd0JMQrOTQ",
  authDomain: "adoptme-cbaa1.firebaseapp.com",
  databaseURL: "https://adoptme-cbaa1.firebaseio.com",
  projectId: "adoptme-cbaa1",
  storageBucket: "adoptme-cbaa1.appspot.com",
  messagingSenderId: "453829120876",
  appId: "1:453829120876:web:0cbace4f2528e88c1b1949"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage()

export {
  storage, firebase as default
}