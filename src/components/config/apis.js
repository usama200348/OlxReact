import { initializeApp } from "firebase/app";
import { getFirestore,getDoc,doc, collection, getDocs } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDGz2rBkYNARH3duGqLn7I-84SgjADJnTc",
  authDomain: "olxreact-c6d3e.firebaseapp.com",
  projectId: "olxreact-c6d3e",
  storageBucket: "olxreact-c6d3e.appspot.com",
  messagingSenderId: "262152203358",
  appId: "1:262152203358:web:e21d34a5362f5a729058cf",
  measurementId: "G-540XLHJQZR"
};  

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
 
async function getAllProducts() {
    console.log('hello');
    const querySnapshot = await getDocs(collection(db, "Ads"));
  const products = [];
  querySnapshot.forEach((doc) => {
    products.push({ id: doc.id, ...doc.data() });
  });
  return products;
}




async function getSingleProduct (uid) {
  try {
    console.log('Fetching product with uid:', uid);
    const docRef = doc(db, "ads", uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      const add = docSnap.data();
      return add;
    } else {
      console.log("No such document!");
      return null;
    }
  } catch (error) {
    console.error("Error fetching document:", error);
    return null;
  }
};


export {
  onAuthStateChanged,
  auth,
  getAllProducts,
  getSingleProduct
};
