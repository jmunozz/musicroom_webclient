import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import Config from './config'
import Socket from './socket'

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
