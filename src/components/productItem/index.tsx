import React, { useEffect, useState } from 'react';
import { HiOutlineHeart } from 'react-icons/hi'
import { IProductItem, IProducts } from '../../@types/ProductTypes'
import { useDispatch, useSelector } from 'react-redux';
import { addProductToBasketAsync, getAllBasketItemsAsync, removeFromBasketAsync } from '../../redux/basket/service';
import { addProductToFavorites, getAllFavoritesAsync, removeFromFavoritesAsync } from '../../redux/favorite/service';
import { AppDispatch, RootState } from '../../redux/store';
import CircleLoading from '../circleLoading';
import { Link } from 'react-router-dom';


const ProductItem: React.FC<IProductItem> = ({ item, itemOffset }) => {

    // Basket Items
    const basket = useSelector((state: RootState) => state.basket.basket);
    // Favoirtes Items
    const favorites = useSelector((state: RootState) => state.favorite.favorites);
    // Dispatch
    const dispatch = useDispatch<AppDispatch>();

    // Is item in basket array 
    const [haveBasket, setHaveBasket] = useState<IProducts | undefined>();
    // Is item in favorites array
    const [haveFavorites, setHaveFavorites] = useState<IProducts | undefined>();

    // Formatter for prices
    const formatter = new Intl.NumberFormat('tr-TR');


    // When we click the add basket button than this function will work and it will give an active class to clicked button and 1000ms after it will remove
    const loadingProcess = (item: IProducts) => {
        const allAddBasketBtn = document.querySelectorAll(".basket-button");

        allAddBasketBtn[Number(item.id) - Number(itemOffset) - 1]?.querySelector(".circle-loading")?.classList.add("active");

        setTimeout(() => {
            allAddBasketBtn[Number(item.id) - Number(itemOffset) - 1]?.querySelector(".circle-loading")?.classList.remove("active");
        }, 1000);
    }

    // Add to basket function
    const addToBasket = async (e: React.SyntheticEvent, item: IProducts) => {
        e.preventDefault();
        loadingProcess(item);
        await dispatch(addProductToBasketAsync(item));
    }

    // Remove from basket function
    const removeFromBasket = async (e: React.SyntheticEvent, item: IProducts) => {
        e.preventDefault();
        loadingProcess(item);
        await dispatch(removeFromBasketAsync(item.id));
    }

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


    // We are checking if item is in the basket array, if it's "yes" than this item will put in haveBasket 
    useEffect(() => {
        setHaveBasket(basket?.find(data => data.id === item.id))
    }, [basket, item, haveBasket])

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
                    {haveBasket?.id === item.id ?
                        <button onClick={(e) => removeFromBasket(e, item)} className={`btn basket-button relative justify-between border-[2px] font-bold hover:shadow-[0_0_10px_2px_rgba(255,26,72,.75)] text-white bg-primaryOrange border-primaryOrange`}>
                            <span>Sepet'ten Çıkar</span>
                            <div className='absolute right-2 top-[10px]'>
                                <CircleLoading />
                            </div>

                        </button>
                        : <button onClick={(e) => addToBasket(e, item)} className={`btn basket-button relative justify-between border-[2px] font-bold bg-grayishBlue text-veryDarkBlue border-grayishBlue hover:text-white hover:bg-veryDarkBlue hover:border-veryDarkBlue`}>
                            <span>Sepete Ekle</span>
                            <div className='absolute right-2 top-[10px]'>
                                <CircleLoading />
                            </div>

                        </button>
                    }
                    <span className="text-base font-bold text-veryDarkBlue">{formatter.format(item.price)} TL</span>
                </div>
            </div>
        </Link>
    )
}

export default ProductItem