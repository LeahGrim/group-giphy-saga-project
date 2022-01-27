import {useState} from 'react';
import './GiphyForm.css'
import { useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import React from 'react';
import Stack from '@mui/material/Stack';


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
        console.log('in grabSearch', newGif)
        
        setNewGif('');
    }

    
    return(
    <>
    <form onSubmit={addNewSearch}>
   
    <input 
        type= 'text'
        placeholder= 'Search for Your Gif Here'
        value= {newGif}
        onChange= {event => setNewGif(event.target.value)}
        className="textArea"
    />
    <Stack direction="row" spacing={2}>
    <Button type='submit' variant="contained" startIcon= {<SendIcon />}> Search</Button>    
    </Stack>
    </form>
    </>
    )
}
export default GiphyForm;