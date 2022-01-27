import React, {useEffect} from 'react';
import { useDispatch, useSelector } from  'react-redux';
import axios from 'axios';


function Results () {
    const dispatch = useDispatch();

    // const selectedGif = useSelector(store => store.resultsList)

    const likePix = (liked) => {
        console.log('in likePix');
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
        <ul>
            {/* {selectedGif.map((eachGif, index) => (<li key={index}> {<img src={eachGif} alt='cool image' width={200} />} <button onClick={() => likePix(liked)}> ❤️ </button></li>))} */}
        </ul>
        
        
        </>
    )
}

export default Results