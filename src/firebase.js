import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDsz9cgy3Fqr5PpJzcs0-wDEvFKO0sOX7M",
    authDomain: "whatsapp-clone-89fa6.firebaseapp.com",
    databaseURL: "https://whatsapp-clone-89fa6.firebaseio.com",
    projectId: "whatsapp-clone-89fa6",
    storageBucket: "whatsapp-clone-89fa6.appspot.com",
    messagingSenderId: "276877325873",
    appId: "1:276877325873:web:4cbfbc338b5b180ed08710",
    measurementId: "G-KKFDFWYC1P"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;