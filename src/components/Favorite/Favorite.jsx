import React, {useEffect} from 'react';
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
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';


function Favorite(){
    const dispatch = useDispatch();

    // Makes our reducers available in our component
    const favorites = useSelector(store => store.favList);
    console.log('favorite', favorites)

    useEffect(() => {
        get();
    }, []);

    const get = () => {
        console.log('is get');
        dispatch({
            type: "FETCH_FAVORITES"
        })
    }

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
                {favorites &&
                <div className='container'>
                    
                        {favorites.map(fav => (
                            <div className='picDiv'>
                            <img 
                                key={fav.id} 
                                src={fav.url}
                                width={200} 
                                height={250}
                                className='pic'
                            />
                            {/* on delete button click, the function deleteFavPic is triggered id number is sent to index */}
                            <div className="favBtns">
                            <IconButton aria-label="delete" size="large" >
                                <DeleteIcon fontSize= "inherit" onClick={()=> deleteFavPic(fav.id)} />
                            </IconButton>
                                <Box sx={{ minWidth: 120 }}>
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">Category</InputLabel>
                                        <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        label="Age"
                                        // onChange={handleChange}
                                        >
                                        <MenuItem value={1}>Funny</MenuItem>
                                        <MenuItem value={2}>Animal</MenuItem>
                                        <MenuItem value={3}>Inspirational</MenuItem>
                                        <MenuItem value={4}>Sports</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Box>
                                </div> 
                    </div>
                        ))}
                    </div>
                }
            <br/>
            </div>

            <Funny />
            <Animal />
            <Inspirational />
            <Sports />
            
        </>
    )
}

export default Favorite;