import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

//  Reducers
import indexReducer from './indexReducer';
import user from '../components/users/usersReducer';

const logger = createLogger();

const enhancer = compose(
  applyMiddleware(thunk, logger)
);

const appReducer = combineReducers({
  user
});

const rootReducer = (state, action) => {
  if (action.type === 'CLEAR_APP') {
    state = undefined;
  }

  return appReducer(state, action);
};

export default function configureStore() {
  const store = createStore(
  rootReducer,
  undefined,
  enhancer
  );

  if (module.hot) {
    module.hot.accept(() => {
      const nextRootReducer = indexReducer.default;

      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
