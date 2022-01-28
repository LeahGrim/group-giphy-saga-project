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
    yield takeEvery('IMAGE_LIKED', sendFavorite);
    yield takeEvery('FETCH_FAVORITES', fetchFavs);
    yield takeEvery('DELETE_IMAGE', deleteFavImage);
} // end function rootSaga


function* fetchFavs(){
    console.log('in saga');
    try{
        let response = yield axios.get('/api/favorite');
        console.log('is response', response.data);
        
        yield put({
            type: 'SET_FAVORITES',
            payload: response.data
        })
    } catch(err){
        console.error(err);
    }
} // end function rootSaga

function* sendFavorite (action){
    try{
    console.log('in sendFavorite', action.payload);
    // set up axios POST
    yield axios.post('/api/favorite', {url: action.payload})
    } // try ends here
    catch(err){
        console.log('sendFavorite failed', err);
    }
} // end function sendFavorite

// function to delete image from favorite page
function* deleteFavImage(action){
    console.log('in deleteFavImage on the index.js, action we sent from client side is', action.payload)
    //specify the item you are deleting by specifying route
    //the action.payload is the id number sent from client side page 
    let response= yield axios.delete(`/api/favorite/${action.payload}`)
   
    //now we call the fetch favorites to list favorite images 
    //console.log('response.data is', response.data); 
    yield put({
        type: 'FETCH_FAVORITES'
        
    })

}

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
        let response = yield axios.get('/api/results', {params: {q: action.payload.search, offset: action.payload.page * 10}});
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

const favList = (state=null, action) => {
    switch(action.type) {
        case 'SET_FAVORITES': 
            console.log('in set results', action.payload)
            return action.payload
        default:
            return state;
    }
}

// Reducer to set search parameter
// const 

// Create one store that all components can use
const store = createStore(
    combineReducers({
        resultsList,
        favList,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);
// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);





ReactDOM.render(<Provider store={store}><App /></Provider>,
    document.getElementById('root'));

