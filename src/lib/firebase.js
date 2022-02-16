import Firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';



// Import the seed file
//import { seedDatabase } from '../seed';

const config = {
  apiKey: "AIzaSyDosgCNgnDUMnagxpYaAGg4hGA7kwrsWYY",
  authDomain: "instagram-c5d3d.firebaseapp.com",
  projectId: "instagram-c5d3d",
  storageBucket: "instagram-c5d3d.appspot.com",
  messagingSenderId: "417554541445",
  appId: "1:417554541445:web:91caf4129c16a1d37532ec"
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

// Call the seed file (only once)

//seedDatabase(firebase);

export { firebase, FieldValue};
