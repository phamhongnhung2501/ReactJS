import React from 'react';
import './../css/App.css';
import Nav from './Nav';
import Footer from './Footer';
import HongNhungURL from '../router/HongNhungURL';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
function App() {
  return (
    <Router>
      <div >
            <Nav/>
            <HongNhungURL/>
            <Footer/>
      </div>
    </Router>
    
  );
}

export default App;
