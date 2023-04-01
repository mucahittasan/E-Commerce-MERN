// Libraries
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
// Types
import { IProducts } from '../../@types/ProductTypes';
import { AppDispatch, RootState } from '../../redux/store';
// Services
import { addProductToFavorites, removeFromFavoritesAsync } from '../../redux/favorite/service';
// Icons
import { HiOutlineHeart } from 'react-icons/hi';

type FavoriteButtonsProps = {
    item: IProducts
}

const FavoritesButton: React.FC<FavoriteButtonsProps> = ({ item }) => {

    // Is item in favorites array
    const [haveFavorites, setHaveFavorites] = useState<IProducts | undefined>();

    const dispatch = useDispatch<AppDispatch>()

    const favorites = useSelector((state: RootState) => state.favorite.favorites);


    // Aad product to favorites
    const addToFavorites = async (e: React.SyntheticEvent, item: IProducts) => {
        e.preventDefault()
        await dispatch(addProductToFavorites(item));
    }

    // Remove from favorites
    const removeFromFavorites = async (e: React.SyntheticEvent, item: IProducts) => {
        e.preventDefault()
        await dispatch(removeFromFavoritesAsync(item.id));
    }


    useEffect(() => {
        setHaveFavorites(favorites?.find(data => data.id === item.id))
    }, [favorites, item])



    return (
        <>
            {haveFavorites?.id === item.id ?
                <button onClick={(e) => removeFromFavorites(e, item)} className="absolute top-3 right-3 w-[30px] h-[30px] text-lg flex items-center justify-center transition bg-primaryRed text-white rounded-full hover:shadow-[0_0_10px_2px_rgba(255,26,72,.75)]"> <HiOutlineHeart /> </button>
                : <button onClick={(e) => addToFavorites(e, item)} className="absolute top-3 right-3 w-[30px] h-[30px] text-lg flex items-center justify-center bg-slate-200 transition hover:bg-veryDarkBlue hover:text-white rounded-full"> <HiOutlineHeart /> </button>
            }
        </>
    )
}

export default FavoritesButton