import React from 'react';
import logo from './logo.svg';
import './App.css';
// Hang si su dung 1 lan
const a1 = "Nhung"; 
class App1 extends React.Component {
  render() {
    return (
      <div>
        <h3> My name is: {a1} </h3>
        <div className="form-check">
        <label className="form-check-label">
          <input type="checkbox" className="form-check-input" name id defaultValue="checkedValue" defaultChecked />
          Display value
        </label>
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
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <App1/>
      </header>
    </div>
  );
}

export default App;
