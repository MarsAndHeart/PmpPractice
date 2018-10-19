/**
 * Created by jianghai on 2018/5/15.
 */
import {createStore, compose} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
import storageSession from 'redux-persist/lib/storage/session';

import middleWare from './utils/middleware';
import reducers from './reducers';

const persistConfig = {
  key: 'root',
  storage: storageSession,
};

const persistedReducer = persistReducer(persistConfig, reducers);


export default () => {
  const enhancer = compose(middleWare);
  let store = createStore(
    persistedReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    enhancer
  );

  let persistor = persistStore(store);

  return {store, persistor};
};
