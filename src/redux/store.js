import { createStore, applyMiddleware, compose } from 'redux'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import thunk from 'redux-thunk'
import createHistory from 'history/createBrowserHistory'
import rootReducer from './reducers/rootReducer.js'
import { logger } from 'redux-logger'

export const history = createHistory();

const initialState = {
      authorname: 'JENNIFER AAKER',
      ix: 0
};

const enhancers = []
const middleware = [
  thunk,
  routerMiddleware(history),
  logger
]

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware, logger),
  ...enhancers
)


const store = createStore(
  connectRouter(history)(rootReducer),
  initialState,
  composedEnhancers
)

export default store;
