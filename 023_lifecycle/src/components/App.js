import React from 'react';
import './App.css';
import NoiDung from './noiDung'; 

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      trangthai:"khoitao",
      trangthai2:"khoitao2",
    }
  }
  
  componentWillMount() {
    console.log('componentWillMount is running!')
  }
  componentDidMount() {
    console.log('componentDidMount is running!');
    
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('scup is running!');
    return true;
  }
  componentWillUpdate(nextProps, nextState) {
    console.log('cwup is running!');
  }
  componentDidUpdate(prevProps, prevState) {
    console.log(' componentDidUpdate da chay roi!');
    
  }
  
  
  capNhatState = () => {
    this.setState({
      trangthai:"CapNhat1",
      trangthai2:"CapNhat2",
    });
  }
  render() {
    // console.log("render is running!");
    console.log(this.state.trangthai);
    
    return (
      <div className="App">
        <NoiDung name={this.state.trangthai2}></NoiDung>
        <button onClick={() => this.capNhatState()}>Click to update state</button>
      </div> 
    );
  }
}
export default App;