import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, compose } from 'redux';
import rootReducer from './reducer';
// const todos = [{
//     id,
//     text,
//     completed
// }];

// const showFilter = ['all', 'active', 'completed'];

// const reducer = combineReducers({
//     todos,
//     filter
// }) 
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers());

ReactDOM.render(<App store={store}/>, document.getElementById('root'));
