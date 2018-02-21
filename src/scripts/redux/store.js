import { createStore, combineReducers, applyMiddleware } from 'redux'
import reducers from './reducers'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'

const loggerMiddleware = createLogger()

const store = createStore(
  combineReducers({
    ...reducers
  }),
  applyMiddleware(thunkMiddleware, loggerMiddleware)
)

// console.log('store: ', store.getState())

export default store
