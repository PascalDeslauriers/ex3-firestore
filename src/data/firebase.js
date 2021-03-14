import fbAppli from 'firebase/app';
import 'firebase/firestore';

/******* Ex#3 - Étape B ********************************/ 
// Ajouter votre objet de configuration Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDEpJ6DUSbSSh8Xa9lfVOxvhGFnTrmb8ss",
  authDomain: "fir-5391b.firebaseapp.com",
  projectId: "fir-5391b",
  storageBucket: "fir-5391b.appspot.com",
  messagingSenderId: "21942816949",
  appId: "1:21942816949:web:82382437738ca6d4776efc"
};

// Initialiser Firebase
if(!fbAppli.apps.length) {
  fbAppli.initializeApp(firebaseConfig);
}

// Initialiser Firestore
const bd = fbAppli.firestore();
/******* Ex#3 - Étape C ********************************/ 
// Exporter (par défaut) la référence à "bd" pour pouvoir l'utiliser dans le composant ListeProduits
export default bd;