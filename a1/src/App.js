import React from 'react';
import logo from './logo.svg';

import './App.css';
function One(){
  return (
    <div> 
      <h2> So 1 tap 1</h2>
      <h3> So 1 tap 2</h3>
    </div>
  )
}

var Two = function(){
  return (
    <div>
      <h2> Cach so 2 </h2>
    </div>
  );
}

var Three = () => (
                    <div>
                      <h2> Cach so 3 </h2>
                    </div>
                  );
 
class Four extends React.Component {
  render() {
    return (
      <div>
        <button> So 4 </button>
      </div>
    );
  }
}               
//  Sử dụng props cach 1
function NumberOne(props){
  return(
    <div>
      <div className="col-6">
        <div className="card">
          <img className="card-img-top" src="http://placehold.it/700x300" alt=""/>
          <div className="card-body">
            <h4 className="card-title"> Title </h4>
            <p className="card-text"> Text </p>
          </div>
        </div>

      </div>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <One/>
        <Two/>
        <Three/>
        <hr/>
        <Four/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >

        </a>
      </header>
    </div>
  );
}

export default App;