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
    yield takeEvery('FETCH_RESULTS', fetchResults);
    yield takeEvery('SET_SEARCH', searchParam);


} // end function rootSaga
    
// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Function to get search results
function* fetchResults() {
    try {
        console.log('made it to fetch results');

        // Axios request to get from api
        let response = yield axios.get('/api/results');
        console.log('response data is', response.data);

        yield put({
            type: 'SET_RESULTS',
            payload: response.data
        })
    }
    catch(err){
        console.error('failed to get search results', err);
    }
}; // end fetchResults function

// Function to get search results
function* searchParam(action) {
    try {
        console.log('made it to search param');

        // Axios request to get from api
        let response = yield axios.get('/api/results', {params: {q: action.payload}});
        console.log('response data is', response.data);

        yield put({
            type: 'SET_RESULTS',
            payload: response.data
        })
    }
    catch(err){
        console.error('failed to get search results', err);
    }
}; // end fetchResults function

// Reducer to set search results
const resultsList = (state=null, action) => {
    switch(action.type) {
        case 'SET_RESULTS': 
            console.log('in set results', action.payload)
            return action.payload
        default:
            return state;
    }
}; // End resultsList reducer

// Reducer to set search parameter
// const 

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

