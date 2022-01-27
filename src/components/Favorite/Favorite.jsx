import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
            <h1>Favorites my guy</h1>
            {favorites &&
                <ul>
                    {favorites.map(fav => (
                        <li key={fav.id}><img src={fav.url}/></li>
                    ))}
                </ul>
            }
        </>
    )
}

export default Favorite;