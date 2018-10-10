import {createStore, applyMiddleware} from 'redux';
import rootreducer from './reducers/rootReducer';
import thunk from 'redux-thunk';

var store = createStore(rootreducer, applyMiddleware(thunk));

export default store;
