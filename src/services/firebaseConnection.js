import firebase from 'firebase/app';
import 'firebase/auth'
import 'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyD9-RwA7mPeiMr299Q6P7nHheNdvmZVthQ",
    authDomain: "financas-bcd15.firebaseapp.com",
    projectId: "financas-bcd15",
    storageBucket: "financas-bcd15.appspot.com",
    messagingSenderId: "420739848954",
    appId: "1:420739848954:web:ee0d85289f07ce9fe8c743"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export default firebase;