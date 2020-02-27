import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCP41HHD3cF0uc4iNBXizpjjfyHAEIhtuY",
  authDomain: "chatbox-app-cffad.firebaseapp.com",
  databaseURL: "https://chatbox-app-cffad.firebaseio.com",
  projectId: "chatbox-app-cffad",
  storageBucket: "chatbox-app-cffad.appspot.com",
  messagingSenderId: "31407735836",
  appId: "1:31407735836:web:ea7019eef9a4f264a60bd9",
  measurementId: "G-RXR2F5VE73"
})

const base = Rebase.createClass(firebase.database())

export { firebaseApp }

export default base
