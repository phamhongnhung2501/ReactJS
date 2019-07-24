import React from 'react';
import logo from './logo.svg';
import './App.css';
const so = [1,2,3,4,5,6];
// x dong vai tro nhu 1,2,3,4,5,6
// mang arrow function
// const so2 = so.map((x) => x*2 + ",");
// Duyet tung phan tu cua mang sau do xuat ra HTML
const so3 = so.map((x) => (
  <div>
    <li>So: {x}</li>
  </div>
));
class App2 extends React.Component {
  render() {
    return (
      <div>
        {so3}
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
        <App2/>
      </header>
    </div>
  );
}

export default App;
