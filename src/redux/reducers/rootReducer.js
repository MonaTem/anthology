import { combineReducers } from 'redux';

import authors from './authors';

const rootReducer = combineReducers({ authors });

// function rootReducer(state, action) {
//    authors: authors(state.authors, action)
// }

export default rootReducer;
