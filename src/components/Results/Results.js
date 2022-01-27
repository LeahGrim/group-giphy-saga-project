import React, {useEffect} from 'react';
import { useDispatch, useSelector } from  'react-redux';
import axios from 'axios';
import './Results.css'


function Results () {
    const dispatch = useDispatch();
    
    const selectedGif = useSelector(store => store.resultsList)
    
    console.log('this is the selected GIF', selectedGif);
    
    const likePix = (liked) => {
        console.log('in likePix', liked);
        dispatch ({
            type: 'IMAGE_LIKED',
            payload: liked
        })
    }

    // note .... saga should listen for a dispatch message of "IMAGE_LIKED" 
    // containing a payload of the particular image liked
    // when it receives this, it should send it to a store 
    // which will be a list of all images liked

    return (
        <>
        <div className="gifBox" >
            {selectedGif && 
                <div className='container'>
                    
                    {selectedGif.data.map((eachGif, index) => (
                        <div className='picDiv'>
                            <img 
                                key={index} 
                                src={eachGif.images.original.url} 
                                alt='cool image' 
                                width={200} 
                                height={250}
                                className='pic'
                            /> 
                            <br/>
                            <button onClick={event => likePix(eachGif.images.original.url)}> ❤️ </button>
                        </div>
                        ))}
                </div>
            }
        </div>
        </>
    )
}

export default Results