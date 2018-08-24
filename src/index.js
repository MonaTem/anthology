import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import { Provider } from 'react-redux';
import Anthology from './Anthology';
import registerServiceWorker from './registerServiceWorker';

const app = (
	<Provider store={configureStore()}>
		<Anthology />
	</Provider>
)


ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
