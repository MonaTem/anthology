import { combineReducers } from 'redux';
import { routerReducer }  from 'react-router-redux';

import authors from './authors';

const rootReducer = combineReducers({ authors, routing: routerReducer });

export default rootReducer;
