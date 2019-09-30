import * as firebase from 'firebase';
var firebaseConfig = {
    apiKey: "AIzaSyBIjXBAjbz_7OOwWwhKzxAjjaf0TpBhIWc",
    authDomain: "notereact-ff529.firebaseapp.com",
    databaseURL: "https://notereact-ff529.firebaseio.com",
    projectId: "notereact-ff529",
    storageBucket: "",
    messagingSenderId: "312896160498",
    appId: "1:312896160498:web:8bb81d9d1633fd50"
  };
  // Initialize Firebase
  export const firebaseConnect = firebase.initializeApp(firebaseConfig);
  var data = firebase.database().ref('dataForNote/node3');
      //sua du lieu
        data.set({
            id:3,
            title: "Ngay 3/9",
            content: "Demo content"
        })

      // data.once('value').then(function (snapshot) {
      //     console.log(snapshot.val());
      // })