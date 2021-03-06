import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux'
// import store from './redux/store/index'
import connect from './connect'
import { createStore } from 'redux'
import reducer from './redux/reducer/index'
// 根节点createStore 并绑定store
const store = createStore(reducer)
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
document.getElementById('root'));
// registerServiceWorker();

//npm start