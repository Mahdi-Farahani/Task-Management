import {createStore, applyMiddleware, compose} from 'redux';
import {persistReducer} from 'redux-persist';
import LocalStorage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
// import logger from 'redux-logger';
import Reducer from './reducer';

const devMode = process.env.NODE_ENV === 'development';

const composeEnhancers =
  (devMode &&
    typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      trace: true,
      traceLimit: 25,
    })) ||
  compose;

const persistConfig = {
  key: 'appticity',
  storage: LocalStorage,
};

const persistedReducer = persistReducer(persistConfig, Reducer);

export default createStore(
  persistedReducer,
  composeEnhancers(devMode ? applyMiddleware(thunk) : applyMiddleware(thunk))
);
