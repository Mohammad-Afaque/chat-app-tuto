import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCHAoKA95sIlFILUrTavDVRMHHf5ZufMNw",
  authDomain: "chatapp-c207d.firebaseapp.com",
  projectId: "chatapp-c207d",
  storageBucket: "chatapp-c207d.appspot.com",
  messagingSenderId: "940829531328",
  appId: "1:940829531328:web:4987fe9c96130d7e836125"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const auth = firebaseApp.auth();

