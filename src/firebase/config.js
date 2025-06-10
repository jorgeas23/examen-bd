
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCUwlUkRtgLRBK975yTdV8jmFm9NV1H2Qg",
  authDomain: "gymfit-ffeac.firebaseapp.com",
  projectId: "gymfit-ffeac",
  storageBucket: "gymfit-ffeac.appspot.com", // ← corregido
  messagingSenderId: "440419164753",
  appId: "1:440419164753:web:1ebc3fb55f34df84e2ce70",
  measurementId: "G-BP136M54GR",
};


const app = initializeApp(firebaseConfig);


const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
