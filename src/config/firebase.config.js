import  { getApp, getApps, initializeApp } from "firebase/app"
// import {} from "firebase/storage"


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAkIHW-BxS9modALYp-CvcYt7L4Mao1G7M",
  authDomain: "fir-auth-6aadd.firebaseapp.com",
  projectId: "fir-auth-6aadd",
  storageBucket: "fir-auth-6aadd.appspot.com",
  messagingSenderId: "835885467054",
  appId: "1:835885467054:web:6b75a132e119766418743f"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
export  { app }