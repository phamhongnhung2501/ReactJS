// import React from 'react';
import './../App.css';
import Header from './Header';
import Search from './Search';
import TableData from './TableData';
import AddUser from './AddUser';


import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      hienThiForm : false  
    }
  }
  
doiTrangThai = () =>{
  this.setState = {
    hienThiForm : !this.state.hienThiForm
  }
}

  render() {
    return (
      <div>
         <Header/>
          <div className="searchForm">
            <div className="container">
              <div className="row">
                <Search  hienThiForm={this.state.hienThiForm} ketNoi={()=>this.doiTrangThai()} />
                <TableData/>
                <AddUser hienThiForm={this.state.hienThiForm} />
            </div>
          </div>
          </div>
      </div>
    );
  }
}

export default App;