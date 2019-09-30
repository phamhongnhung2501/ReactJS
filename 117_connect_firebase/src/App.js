import React, { Component } from 'react';
import './App.css';
import {firebaseConnect} from "./firebaseConnect";
import * as firebase from 'firebase';

class App extends Component {
  pushData = () =>{
    var connectData = firebase.database().ref('dataForNote');
    connectData.push({
      title: "ghi chu so 3",
      content: "noi dung ghi chu so 3"
    })
    console.log('Ban vua them du lieu vao firebase');
  }
  deleteData = (id) =>{
    var connectData = firebase.database().ref('dataForNote');
    connectData.child(id).remove();
    console.log("Xoa thanh cong phan tu co id la: " + id);
  }

  render() {
    console.log(firebaseConnect);
    
    return (
      <div>
        <button onClick={()=> this.pushData()}>Click de them moi bang ham push</button>

        <button onClick={()=> this.deleteData('-LnpEV7P9tJOgth5F3y5')}>Click de xoa du lieu</button>
      </div>
    );
  }
}

export default App;