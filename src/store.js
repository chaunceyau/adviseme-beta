import { applyMiddleware, createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native

import logger from 'redux-logger'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'

import reducer from './reducers'

const persistConfig = {
  key: 'root',
  storage
}

// persists to storage so saves data on refresh
const persistedReducer = persistReducer(persistConfig, reducer)

// apply middlewares
const middlewares = applyMiddleware(promise(), thunk, logger)

export const store = createStore(persistedReducer, middlewares)
export const persistor = persistStore(store)

export default store