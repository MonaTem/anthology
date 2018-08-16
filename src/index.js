import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import Anthology from './Anthology';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Anthology />, document.getElementById('root'));
registerServiceWorker();
