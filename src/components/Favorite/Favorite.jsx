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