import { createStore, combineReducers, applyMiddleware } from 'redux'
import loggedUserReducer from './reducers/loggedUserReducer'
import { createLogger } from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'

const logger = createLogger();
const devTools = composeWithDevTools();

const rootReducers = combineReducers({
  loggedUserState: loggedUserReducer
})

const store = createStore(rootReducers, devTools, applyMiddleware(logger))

export default store