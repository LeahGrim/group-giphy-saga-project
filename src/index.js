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
yield takeEvery('FETCH_FAVORITES', fetchFavs)

} // end function rootSaga
function* fetchFavs(){
    console.log('in saga');
    try{
        let response = yield axios.get('/api/favorite');
        yield put({
            type: 'SET_FAVORITES',
            payload: response.data
        })
    } catch(err){
        console.error(err);
    }
}


// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();


// Create one store that all components can use
const store = createStore(
    combineReducers({
        
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);
// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);





ReactDOM.render(<Provider store={store}><App /></Provider>,
    document.getElementById('root'));

