import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import Anthology from './Anthology';
import store, { history } from './store'
import registerServiceWorker from './registerServiceWorker';

const app = (
	<Provider store={store}>
    <ConnectedRouter history={history}>  
		 <Anthology />
   </ConnectedRouter>
	</Provider>
)


ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
