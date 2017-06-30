import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// reactDOM(组件， 挂载节点)
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
