import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware as connectedRouterMiddleware } from 'connected-react-router';
import { composeWithDevTools } from 'redux-devtools-extension';
import history from './history';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

export default function configureStore(preloadedState) {
  // Use routerMiddleware(history) if you want to dispatch history actions (e.g. to change URL with push('/path/to/somewhere')).
  const routerMiddleware = connectedRouterMiddleware(history);

  // redux-saga middleware which allows to make application side effects (i.e. asynchronous things
  // like data fetching and impure things like accessing the browser cache)
  const sagaMiddleware = createSagaMiddleware();

  // Middleware adds extra functionality to the Redux dispatch function.
  const middlewares = [routerMiddleware, sagaMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  // Enhancers add extra functionality to the Redux store.
  const enhancers = [middlewareEnhancer];

  // replace default compose function from redux with composeWithDevTools from redux-devtools-extensions
  // That will allows you to inspect and replay actions, explore your state at different times, dispatch actions directly to the store, and much more
  const composedEnhancers = composeWithDevTools(...enhancers);

  // Create store that will manage the state tree.
  const store = createStore(rootReducer, preloadedState, composedEnhancers);

  // Finally run the saga
  sagaMiddleware.run(rootSaga);

  return store;
}
