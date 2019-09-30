import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import store1 from './Store';

ReactDOM.render(
    // mỗi 1 provider đều phải có 1 biến store 
    // store là 1 props bắt buộc của Provider
    // từ khóa ở đây là store = từ khóa mà mình định nghĩa là store1
    <Provider store={store1}>
        <App/>
    </Provider>
, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
