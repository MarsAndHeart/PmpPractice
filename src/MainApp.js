/**
 * Created by jianghai on 2018/10/16.
 */
import * as React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import Routers from './Routers';
import configureStore from './basicStore';

const MainApp = () =>{
  const {store,persistor} = configureStore();
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Routers/>
      </PersistGate>
    </Provider>
  );
};

export default MainApp;