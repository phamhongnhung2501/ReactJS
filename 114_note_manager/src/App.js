import React, {Component} from 'react';
import './App.css';
import NodeList from "./NodeList";
import NodeForm from "./NodeForm";
class App extends Component {
    render() {
        return (
            < div >
                <NodeList/>
                <NodeForm/>
            < /div>
    )
        ;
    }
}

export default App;