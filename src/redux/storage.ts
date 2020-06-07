import { applyMiddleware, combineReducers, createStore, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
import reduxPromiseMiddleware from 'redux-promise-middleware';
import reduxThunk from 'redux-thunk';
import { ApplicationState } from '../../types/ApplicationState';
import { initialUserState, userStateReducer } from './user/reducer';

const appReducers = () => {
  return combineReducers({
    user: userStateReducer,
  });
};
const createAppEnhancers = (middleware) => {
  return composeWithDevTools(applyMiddleware(...middleware));
};

const createMiddleware = () => {
  return [reduxThunk, reduxPromiseMiddleware];
};

export const reduxStore = (): Store<ApplicationState> => {
  const middleware = createMiddleware();
  const reducers = appReducers();
  const enhancer = createAppEnhancers(middleware);
  const initialState: ApplicationState = {
    user: initialUserState,
  };

  return createStore(reducers, initialState, enhancer);
};
