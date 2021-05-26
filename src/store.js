import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducer/index';

const middleware = [thunk]; // read about middleware

const store = createStore(rootReducer, applyMiddleware(...middleware));
export default store;
