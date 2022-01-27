import {useState} from 'react';
import './GiphyForm.css'
import { useDispatch } from 'react-redux';

function GiphyForm(){
   let [newGif, setNewGif] = useState('');
    

   //setup dispatch 
   const dispatch = useDispatch();

    function addNewSearch(event) {
        event.preventDefault();
        dispatch({ 
            type: 'SET_SEARCH',
            payload: newGif
        })
        console.log('in grabSearch', event)
        
    }

    
    return(
    <>
    <form onSubmit={addNewSearch}>
    <input 
        type= 'text'
        placeholder= 'Search for Your Gif'
        value= {newGif}
        onChange= {event => setNewGif(event.target.value)}
    />
    <button type='submit' className= "submitBtn"> Submit </button>

    </form>
    </>
    )
}
export default GiphyForm;