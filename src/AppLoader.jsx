import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import configureStore from './configureStore';
import history from './history';
import Home from './pages/home';

const store = configureStore();
const AppLoader = () => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Home />
      </ConnectedRouter>
    </Provider>
  );
};
export default AppLoader;
