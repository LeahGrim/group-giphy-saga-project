import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
//axios
import axios from 'axios';


// Create the rootSaga/watcherSaga generator function
function* rootSaga() {


} // end function rootSaga


// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Function to get search results


// Reducer to set search results
const resultsList = (state=[], action) => {
    switch(action.type) {
        case 'SET_SEARCH':
            return action.payload
        default:
            return state;
    }
};

// Create one store that all components can use
const store = createStore(
    combineReducers({
        resultsList
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);
// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);





ReactDOM.render(<Provider store={store}><App /></Provider>,
    document.getElementById('root'));

