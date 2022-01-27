import React, {useEffect} from 'react';
import { useDispatch, useSelector } from  'react-redux';
import axios from 'axios';


function Results () {
    const dispatch = useDispatch();

    const selectedGif = useSelector(store => store.resultsList)

    const likePix = () => {
        console.log('in likePix');
        dispatch ({
            type: 'IMAGE_LIKED'
        // payload: ....
        })
        
    }

    return (
        <>
        <ul>
            {selectedGif.map((eachGif, index) => (<li key={index}> {<img src={eachGif} alt='cool image' width={200} />} <button onClick={likePix}> ❤️ </button></li>))}
        </ul>
        
        
        </>
    )
}

export default Results