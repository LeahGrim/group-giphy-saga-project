import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useDispatch } from 'react-redux';


function Animal({favorites}) {

    const dispatch = useDispatch();
    
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
    return (
        <>
            <h1>Animal Favorites</h1>
            {favorites && // This is saying "if there is something in 'favorite', render
                // the following code, otherwise, don't render anything and don't give an error"
                // This prevents that when favorites is empty, the code freaks out trying to render
                // undefined or null values
                <div className='container'>
                        {favorites.map(fav => (
                            fav.category_id === 3 && 
                                <div className='picDiv' key={fav.id} >
                                <img 
                                    src={fav.url}
                                    width={200} 
                                    height={250}
                                    className='pic'
                                />
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
                            ))}
                    </div>
                }
        </>
    )
};

export default Animal;