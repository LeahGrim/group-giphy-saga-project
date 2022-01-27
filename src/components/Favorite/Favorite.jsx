import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
function Favorite(){
    const dispatch = useDispatch();

    // Makes our reducers available in our component
    const favorites = useSelector(store => store.SOMETHING);

    useEffect(() => {
        get();
    }, []);

    const get = () => {
        dispatch({
            type: "FETCH_FAVORITES"
        })
    }
    return (<>
        <h1>Favorties my guy</h1>
    </>)
}

export default Favorite;