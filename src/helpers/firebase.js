//Componente donde se configura la conexion con Firebase

// Firebase App (the core Firebase SDK) is always required and must be listed first
import { initializeApp } from 'firebase/app';


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = initializeApp ({
    apiKey: "AIzaSyCQNc-ym4f8GdLamcSrSLz3VDAJVEwr50Y",
    authDomain: "financerr-3d454.firebaseapp.com",
    databaseURL: "https://financerr-3d454-default-rtdb.firebaseio.com",
    projectId: "financerr-3d454",
    storageBucket: "financerr-3d454.appspot.com",
    messagingSenderId: "304930037167",
    appId: "1:304930037167:web:473b6bdf99f331478ca35a",
    measurementId: "G-4QZV4PPGVE"
});


export default firebaseConfig