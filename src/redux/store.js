import { createStore, applyMiddleware, combineReducers } from 'redux'
import { authors } from '../reducers'

/* * * * * * * * * * * * * * * * * * * * * * * * * * *
	This is a store with one reducer: SELECT_AUTHORs. When
	adding more reducers, make sure to include them in
	line 3 (above) and line 18 (below):
* * * * * * * * * * * * * * * * * * * * * * * * * * * *
*/

var store
export default {

	configure: (initialState) => { // initialState can be null

		const reducers = combineReducers({ // insert reducers here
			index: 0
		})

		if (initialState){
			store = createStore(
			    reducers,
			    initialState,
			    applyMiddleware(thunk)
			)

			return store
		}

		store = createStore(
		    reducers,
				window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
		    applyMiddleware(thunk)
		)

		return store
	},

	currentStore: () => {
		return store
	}
}
