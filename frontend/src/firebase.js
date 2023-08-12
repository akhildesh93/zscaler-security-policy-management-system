import firebase from "firebase/compat/app"
import "firebase/compat/auth"

const app = firebase.initializeApp({
  apiKey: "AIzaSyBsCsY4uQ68aQChco_AJl77Y0Z8ww8zERc",
  authDomain: "users-fd326.firebaseapp.com",
  projectId: "users-fd326",
  storageBucket: "users-fd326.appspot.com",
  messagingSenderId: "21487264357",
  appId: "1:21487264357:web:f004cec9a75da38c5f5c8c",
  measurementId: "G-6FH3G1BPM2",
});

export const auth = app.auth()
export default app
