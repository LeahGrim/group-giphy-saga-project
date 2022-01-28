import {useState} from 'react';
import './GiphyForm.css';
import { useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import React from 'react';
import Stack from '@mui/material/Stack';


function GiphyForm(){
    let [newGif, setNewGif] = useState('');
    let [page, setPage] = useState(1);
   //setup dispatch 
    const dispatch = useDispatch();

    function addNewSearch(event) {
        event !== undefined ? event.preventDefault() : false //without this is gets upset, triggering prevent default from the button
        dispatch({ 
            type: 'SET_SEARCH',
            payload: {search: newGif, page}
        });
    }
    function pageinate(num){
        setPage(num);
        addNewSearch();
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