import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../Results/Results.css'


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
            <div className='container'>
                {favorites &&
                    <div className='picDiv'>
                        {favorites.map(fav => (
                            <img 
                                key={fav.id} 
                                src={fav.url}
                                width={200} 
                                height={250}
                                className='pic'
                            />
                        ))}
                    </div>
                }
            </div>
            </div>
        </>
    )
}

export default Favorite;