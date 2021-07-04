import { persistStore } from 'redux-persist'
import { createStore, applyMiddleware } from 'redux';

import createSagaMiddleware from 'redux-saga'

import persistedRedurcers from './modules/reduxPersist'
import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  persistedRedurcers(rootReducer),
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga)

export const persistor = persistStore(store)
export default store
