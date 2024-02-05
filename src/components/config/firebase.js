import { initializeApp } from "firebase/app";

import { getFirestore, collection, getDocs,getDoc,doc,addDoc, setDoc  } from "firebase/firestore";
import {ref, uploadBytes,getDownloadURL, getStorage} from 'firebase/storage'
// import { getStorage,ref, uploadBytes  } from "firebase/storage";
import {getAuth , createUserWithEmailAndPassword,onAuthStateChanged , signInWithEmailAndPassword } from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyDGz2rBkYNARH3duGqLn7I-84SgjADJnTc",
  authDomain: "olxreact-c6d3e.firebaseapp.com",
  projectId: "olxreact-c6d3e",
  storageBucket: "olxreact-c6d3e.appspot.com",
  messagingSenderId: "262152203358",
  appId: "1:262152203358:web:e21d34a5362f5a729058cf",
  measurementId: "G-540XLHJQZR"
};  
  // Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app);
const storage = getStorage(app);

export async function getAllProducts(){
  const querySnapshot = await getDocs(collection(db, "ads"));
  const products = []
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  console.log(doc.id, " => ", doc.data());
  products.push({id:doc.id,...doc.data()})
});
return products
}

export async function register(useInfo){
  const {fullname, age, email, password}= useInfo
  const {user: {uid}}= await createUserWithEmailAndPassword(auth, email, password)
  const userRef=doc(db, "users", uid)
  await setDoc(userRef, {email, age, fullname})
  alert('Registerd Successfully')
}

export async function login(userInfo){
  const {email,password}=userInfo
  await signInWithEmailAndPassword(auth, email, password)

  alert('Logged In Successfully')
}

export async function getSingleAd(uid) {
  console.log("My id", uid);
  const docRef = doc(db, "ads", uid);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
    return docSnap.data();
  } else {
    console.log("No such document!");
    return null;
  }
  }



export async function postAdToDb(ad) {
  try {
    // const adCollection = collection(db, "ads");
    await addDoc(collection(db,"ads"), ad);
    console.log("Ad posted successfully!");
    alert("Ad posted successfully!");
  } catch (error) {
    console.error("Error posting ad:", error);
    alert("Error posting ad. Please try again.");
  }
}



export{
  onAuthStateChanged, 
  auth,
  addDoc,
  db,
  storage,
  collection,
  ref,
  uploadBytes,
  getDownloadURL
}