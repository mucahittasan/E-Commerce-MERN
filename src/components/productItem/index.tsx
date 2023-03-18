import React, { useEffect, useState } from 'react';
import { HiOutlineHeart } from 'react-icons/hi'
import { IProductItem, IProducts } from '../../@types/ProductTypes'
import { useDispatch, useSelector } from 'react-redux';
import { getAllBasketItemsAsync } from '../../redux/basket/service';
import { addProductToFavorites, getAllFavoritesAsync, removeFromFavoritesAsync } from '../../redux/favorite/service';
import { AppDispatch, RootState } from '../../redux/store';
import { Link } from 'react-router-dom';
import AddToBasketButton from '../addToBasketButton';


const ProductItem: React.FC<IProductItem> = ({ item }) => {

    // Favoirtes Items
    const favorites = useSelector((state: RootState) => state.favorite.favorites);
    // Dispatch
    const dispatch = useDispatch<AppDispatch>();

    // Is item in favorites array
    const [haveFavorites, setHaveFavorites] = useState<IProducts | undefined>();

    // Formatter for prices
    const formatter = new Intl.NumberFormat('tr-TR');


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

    // When page load or dispatch change than we'll get all basket items
    useEffect(() => {
        dispatch(getAllBasketItemsAsync());
    }, [dispatch])

    // Get all favorites item
    useEffect(() => {
        dispatch(getAllFavoritesAsync());
    }, [dispatch])


    useEffect(() => {
        setHaveFavorites(favorites?.find(data => data.id === item.id))
    }, [favorites, item])


    return (
        <Link to={`/shop/${item.id}`} className="min-h-[500px] w-full flex flex-col item-center cursor-pointer group">
            <div className="relative transition border-[2px] border-slate-200 rounded p-2 group group-hover:border-grayishBlue ">
                <img src={item.main_image} alt={item.title} className="max-h-80 w-full object-contain transition duration-300 group-hover:scale-[1.05]" />
                {haveFavorites?.id === item.id ?
                    <button onClick={(e) => removeFromFavorites(e, item)} className="absolute top-3 right-3 w-[30px] h-[30px] text-lg flex items-center justify-center transition bg-primaryOrange text-white rounded-full hover:shadow-[0_0_10px_2px_rgba(255,26,72,.75)]"> <HiOutlineHeart /> </button>
                    : <button onClick={(e) => addToFavorites(e, item)} className="absolute top-3 right-3 w-[30px] h-[30px] text-lg flex items-center justify-center bg-slate-200 transition hover:bg-veryDarkBlue hover:text-white rounded-full"> <HiOutlineHeart /> </button>
                }
            </div>
            <div className="p-2 flex-1 flex flex-col gap-y-[4px]">
                <div className="text-base font-semibold text-veryDarkBlue">
                    <span>{item.title}</span>
                </div>
                <p className="line-clamp-1 text-sm mb-6 text-darkGrayishBlue">
                    {item.description}
                </p>
                <div className="flex justify-between items-center mt-auto">
                    <AddToBasketButton item={item} />
                    <span className="text-base font-bold text-veryDarkBlue">{formatter.format(item.price)} TL</span>
                </div>
            </div>
        </Link>
    )
}

export default ProductItem