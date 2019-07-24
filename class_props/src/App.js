import React from 'react';
import logo from './logo.svg';

import './App.css';

//  Sử dụng props cach 1
function NumberOne(props){
  return(
      <div className="col-6">
        <div className="card">
          <img className="card-img-top" src={props.linkanh} alt=""/>
          <div className="card-body">
            <h4 className="card-title"> {props.tieude}</h4>
            <p className="card-text"> Text </p>
          </div>
        </div>

      </div>
  )
}
// Cach 2 su dung Class co dinh nghia va thao tac voi props
class NumberTwo extends React.Component {
  render() {
    return (
      <div className="col-4">
      <div className="card">
        <img className="card-img-top" src={this.props.linkanh} alt=""/>
        <div className="card-body">
          <h4 className="card-title"> {this.props.tieude}</h4>
          <p className="card-text">Lorem</p>
        </div>
      </div>

    </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="container">
          <div className="row">
            <NumberOne tieude="San oham so 1" linkanh="http://kenh14cdn.com/k:thumb_w/600/TUcCKsDLlXNsjUG7RZV5C4G4GPDR4i/Image/2013/08/enhanced-buzz-15908-1358528030-3-2761e/nhung-chu-meo-cute-noi-tieng-internet.jpg"/>
            <NumberOne tieude="San oham so 2" linkanh="https://kenh14cdn.com/k:thumb_w/600/TUcCKsDLlXNsjUG7RZV5C4G4GPDR4i/Image/2013/08/enhanced-buzz-32444-1358530982-15-2761e/nhung-chu-meo-cute-noi-tieng-internet.jpg"/>
            <NumberTwo tieude="CocaCola" linkanh="http://www.tigercopper.com/wp-content/uploads/2018/05/coca-cola-plus-coffee-330ml.png"/>         
          </div>

        </div>
        
      </header>
    </div>
  );
}

export default App;