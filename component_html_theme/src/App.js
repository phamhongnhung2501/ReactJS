import React from 'react';
import logo from './logo.svg';
import './App.css';
import TopMenu from './Component/TopMenu/TopMenu';
import Header from './Component/Header/Header';
import Content from './Component/Content/Content';
import Footer from './Component/Footer/Footer';

function App() {
  return (
    <div className="_013">
      <TopMenu/>
      <Header/>
      <div class="container">
        <div className="row pt-5">
          <Content tieude="Tin tuc so 1" anh="img/01.jpg" trichdan="day la tric dan 1"/>
          <Content tieude="Tin tuc so 2" anh="img/02.jpg" trichdan="day la tric dan 1"/>
          <Content tieude="Tin tuc so 3" anh="img/03.jpg" trichdan="day la tric dan 1"/>
          <Content tieude="Tin tuc so 1" anh="img/01.jpg" trichdan="day la tric dan 1"/>
          <Content tieude="Tin tuc so 2" anh="img/02.jpg" trichdan="day la tric dan 1"/>
          <Content tieude="Tin tuc so 3" anh="img/03.jpg" trichdan="day la tric dan 1"/>
          <Content tieude="Tin tuc so 1" anh="img/01.jpg" trichdan="day la tric dan 1"/>
          <Content tieude="Tin tuc so 2" anh="img/02.jpg" trichdan="day la tric dan 1"/>
          <Content tieude="Tin tuc so 3" anh="img/03.jpg" trichdan="day la tric dan 1"/>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
