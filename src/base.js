import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database' 

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCP41HHD3cF0uc4iNBXizpjjfyHAEIhtuY",
    authDomain: "chatbox-app-cffad.firebaseapp.com",
    databaseURL: "https://chatbox-app-cffad.firebaseio.com"
})

const base = Rebase.createClass(firebase.database())

export { firebaseApp}

export default base