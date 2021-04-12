import {applyMiddleware, createStore, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {createLogger} from 'redux-logger';
import {persistStore} from 'redux-persist';
import Reactotron from './ReactotronConfig';
import reducer from './Reducers';
import saga from './Sagas';

const sagaMiddlware = createSagaMiddleware();

let middleware;
if (process.env.NODE_ENV === 'development') {
  const logger = createLogger({collapsed: true});
  middleware = applyMiddleware(sagaMiddlware, logger);
} else {
  middleware = applyMiddleware(sagaMiddlware);
}
const store = createStore(
  reducer,
  compose(middleware, Reactotron.createEnhancer()),
);
sagaMiddlware.run(saga);

export default store;
export const Persistor = persistStore(store);
