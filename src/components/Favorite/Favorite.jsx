import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Favorite.css';
import Animal from '../Animal/Animal';
import Sports from '../Sports/Sports';
import Funny from '../Funny/Funny';
import Inspirational from '../Inspirational/Inspirational';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


function Favorite(){
    const dispatch = useDispatch();

    // Makes our reducers available in our component
    const favorites = useSelector(store => store.favList);
    console.log('favorite', favorites);

    useEffect(() => {
        get();
    }, []);

    const get = () => {
        console.log('is get');
        dispatch({
            type: "FETCH_FAVORITES"
        })
    };


    const handleChange = (event, picID) => {
        console.log('in handleChange', event, picID);

        dispatch({
            type: 'SET_CATEGORY',
            payload: {
                id: picID,
                category_id: event,
            }
        })
        
    };


    const deleteFavPic=(id) => {
       //id is being sent from the client on click of delete button into deleteFavPic function
       //now we send that id to DELETE_IMAGE SAGA 
        dispatch({
            type: "DELETE_IMAGE",
            payload: id
        })
    }
    
    return (
        <>  
        <div className='gifBox'>
            <h1>Favorites my guy</h1>
                {favorites && // This is saying "if there is something in 'favorite', render
                // the following code, otherwise, don't render anything and don't give an error"
                // This prevents that when favorites is empty, the code freaks out trying to render
                // undefined or null values
                <div className='container'>
                        {favorites.map(fav => (
                            fav.category_id === 1 && 
                                <div className='picDiv' key={fav.id} >
                                <img 
                                    src={fav.url}
                                    width={200} 
                                    height={250}
                                    className='pic'
                                />
                            {/* on delete button click, the function deleteFavPic is triggered */}
                            
                                <Box sx={{ minWidth: 120 }}>
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label" >Category</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label="Age"
                                            defaultValue=''
                                            onChange={event => handleChange(event.target.value, fav.id)}
                                        >
                                        <MenuItem value={2} >Funny</MenuItem>
                                        <MenuItem value={3} >Animal</MenuItem>
                                        <MenuItem value={4}>Inspirational</MenuItem>
                                        <MenuItem value={5}>Sports</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Box>
                                </div>
                                <button onClick={()=> deleteFavPic(fav.id)}> Delete</button>
                            ))}
                    </div>
                }
            <br/>
            </div>

            <Funny favorites={favorites}/>
            <Animal favorites={favorites}/>
            <Inspirational favorites={favorites}/>
            <Sports favorites={favorites}/>
            
        </>
    )
}

export default Favorite;