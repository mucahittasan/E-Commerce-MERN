// React Libraries
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
// Components
import FavoritesCard from '../../components/favorites/favoritesCard'
// Types
import { AppDispatch, RootState } from '../../redux/store'
// Favorite Service Actions
import { getAllFavoritesAsync } from '../../redux/favorite/service';



const FavoritesPageContainer = () => {

    const favorites = useSelector((state: RootState) => state.favorite.favorites);
    const user = useSelector((state: RootState) => state.register.user);

    const dispatch = useDispatch<AppDispatch>()

    useEffect(() => {
        if (user) {
            dispatch(getAllFavoritesAsync());
        }
    }, [dispatch])

    return (
        <div className='main-container '>
            <h2 className="main-title mb-14">Favoriler</h2>

            {favorites.length === 0 ? <div className='font-bold text-lg text-veryDarkBlue dark:text-white'>Favorilerinizde hiçbir şey yok, ürün eklemek için <Link to="/shop" className='text-primaryRed underline'>alışveriş</Link>  bölümüne gidebilirsiniz.  </div> :
                <div className='xl:flex xl:flex-wrap grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-8'>

                    {favorites?.map((item, index) => (
                        <FavoritesCard key={index} myKey={index} item={item} />
                    ))}
                </div>
            }

        </div>
    )
}

export default FavoritesPageContainer