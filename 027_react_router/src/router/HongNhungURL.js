import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import News from '../components/News';
import Home from '../components/Home';
import Detail from '../components/Detail';
import Contact from '../components/Contact';
class HongNhungURL extends Component {
    render() {
        return (
            <div>
                
                    <div>
                        {/* <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/news">News</Link>
                        </li>
                        <li>
                            <Link to="/detail">Detail</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                        </ul>

                        <hr /> */}
                        <Route exact path="/" component={Home} />
                        <Route exact path="/home" component={Home} />
                        <Route exact path="/news" component={News} />
                        <Route exact path="/new-news/:slug.:id.html" component={Detail} />
                        <Route exact path="/contact" component={Contact} />
                    </div>
                    
            </div>
        );
    }
}

export default HongNhungURL;