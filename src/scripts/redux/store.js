import { createStore, combineReducers } from 'redux'
import reducers from './reducers'

const store = createStore(
  combineReducers({
    ...reducers
  })
)

// console.log('store: ', store.getState())

export default store
