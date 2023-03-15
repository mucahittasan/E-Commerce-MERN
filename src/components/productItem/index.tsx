import React, { useEffect, useState } from 'react';
import { HiOutlineHeart } from 'react-icons/hi'
import { IProductItem, IProducts } from '../../@types/ProductTypes'
import { useDispatch, useSelector } from 'react-redux';
import { addProductToBasketAsync, getAllBasketItemsAsync, removeFromBasketAsync } from '../../redux/products/services';
import { AppDispatch, RootState } from '../../redux/store';
import CircleLoading from '../circleLoading';


const ProductItem: React.FC<IProductItem> = ({ item }) => {

    const basket = useSelector((state: RootState) => state.product.basket);
    const isAddBasketLoading = useSelector((state: RootState) => state.product.isAddBasketLoading);

    const [haveBasket, setHaveBasket] = useState<IProducts | undefined>();

    // Formatter for prices
    const formatter = new Intl.NumberFormat('tr-TR');

    const dispatch = useDispatch<AppDispatch>();

    const loadingProcess = (item: IProducts) => {

    }

    const addToBasket = async (item: IProducts) => {
        loadingProcess(item)
        await dispatch(addProductToBasketAsync(item))
    }

    const removeFromBasket = async (item: IProducts) => {
        loadingProcess(item)
        await dispatch(removeFromBasketAsync(item.id))
    }



    useEffect(() => {
        dispatch(getAllBasketItemsAsync());
    }, [dispatch])


    useEffect(() => {
        setHaveBasket(basket.find(data => data.id === item.id))
    }, [basket, item, haveBasket])


    return (
        <div className=" w-full flex flex-col item-center cursor-pointer group">
            <div className="relative transition border-[2px] border-slate-200 rounded p-2 group group-hover:border-grayishBlue ">
                <img src={item.main_image} alt={item.title} className="max-h-80 w-full object-contain transition duration-300 group-hover:scale-[1.05]" />
                <button className="absolute top-3 right-3 w-[30px] h-[30px] text-lg flex items-center justify-center bg-slate-200 transition hover:bg-primaryOrange hover:text-white rounded-full"> <HiOutlineHeart /> </button>
            </div>
            <div className="p-2 flex flex-col gap-y-[4px]">
                <div className="text-base font-semibold text-veryDarkBlue">
                    <span>{item.title}</span>
                </div>
                <p className="line-clamp-1 text-sm mb-6 text-darkGrayishBlue">
                    {item.description}
                </p>
                <div className="flex justify-between items-center">
                    {haveBasket?.id === item.id ?
                        <button onClick={() => removeFromBasket(item)} className={`btn basket-button relative justify-between border-[2px] font-bold hover:shadow-[0_0_10px_2px_rgba(255,125,26,0.75)] text-white bg-primaryOrange border-primaryOrange`}>
                            <span>Sepet'ten Çıkar</span>
                            <div className='absolute right-2 top-[12px]'>
                                <CircleLoading />
                            </div>

                        </button>
                        : <button onClick={() => addToBasket(item)} className={`btn basket-button relative justify-between border-[2px] font-bold bg-grayishBlue text-veryDarkBlue border-grayishBlue hover:text-white hover:bg-veryDarkBlue hover:border-veryDarkBlue`}>
                            <span>Sepete Ekle</span>
                            <div className='absolute right-2 top-[12px]'>
                                <CircleLoading />
                            </div>

                        </button>
                    }
                    <span className="text-base font-bold text-veryDarkBlue">{formatter.format(item.price)} TL</span>
                </div>
            </div>
        </div>
    )
}

export default ProductItem