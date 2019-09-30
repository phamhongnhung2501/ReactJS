import React, { Component } from 'react';
import {connect} from 'react-redux';
import logo from './logo.svg';
import './App.css';
import News from './News';

// this.props.dulieu
class App extends Component {
  render() {
    return (
      <div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {this.props.dulieu}
          <News/>
        </header>
      </div>
    );
  }
}
// muốn lấy dữ liệu ở trong state => sử dụng hàm "mapStateToProps"
// lấy dữ liệu = state.num, dulieu ở đây không phải là biến mà chính là props
// ---> Store truyền cho App một props chính là : dulieu 

const mapStateToProps = (state, ownProps) => {
  return {
    dulieu: state.num
  }
}

export default connect(mapStateToProps)(App);