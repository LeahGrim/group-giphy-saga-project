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
                <ul>
                    
                    {selectedGif.data.map((eachGif, index) => 
                        (<li key={index}> {<img src={eachGif.images.original.url} alt='cool image' width={200} />} <br></br><button onClick={event => likePix(eachGif.images.original.url)}> ❤️ </button></li>))}
                </ul>
            }
        </div>
        </>
    )
}

export default Results