import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var config = {
    apiKey: "AIzaSyA4GAQ1nXDVzsRETFm5TFTR_dn8lYV02c0",
    authDomain: "react-redux-mario-plan-c3ba3.firebaseapp.com",
    databaseURL: "https://react-redux-mario-plan-c3ba3.firebaseio.com",
    projectId: "react-redux-mario-plan-c3ba3",
    storageBucket: "react-redux-mario-plan-c3ba3.appspot.com",
    messagingSenderId: "541808612159"
  };
  firebase.initializeApp(config)

export default firebase