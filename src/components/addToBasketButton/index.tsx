// React libraries
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
// Types
import { AppDispatch, RootState } from '../../redux/store';
import { IProducts } from '../../@types/ProductTypes';
// Service Actions of Basket
import { addProductToBasketAsync, removeFromBasketAsync, updateBasketItemCountAsync } from '../../redux/basket/service';
// Service Actions of Products
import { getProductByIdAsync } from '../../redux/products/services';
// Components
import CircleLoading from '../circleLoading';

export interface IAddToBasketProps {
    item: {
        id: number,
        loading: boolean,
        title: string,
        description?: string,
        price: number,
        category: string,
        type_of_product: string,
        count: number,
        gender?: string,
        main_image: string,
        images?: [
            {
                sub_image?: string
            }
        ] | undefined,
    }
    myKey?: number | undefined
}

const AddToBasketButton: React.FC<IAddToBasketProps> = ({ item, myKey }) => {

    // Is item in basket array 
    const [haveBasket, setHaveBasket] = useState<IProducts | undefined>();

    const basket = useSelector((state: RootState) => state.basket.basket);
    const basketIsLoading = useSelector((state: RootState) => state.basket.isLoading);

    const dispatch = useDispatch<AppDispatch>()

    const { id } = useParams()

    const location = window.location.pathname


    // When we click the add basket button than this function will work and it will give an active class to clicked button and 1000ms after it will remove
    const loadingProcess = (item: IProducts) => {

        if (location !== "/shop" && id === undefined) {
            const allAddBasketBtn = document.querySelectorAll(".basket-button");
            basketIsLoading && allAddBasketBtn[Number(myKey)]?.querySelector(".circle-loading")?.classList.add("active");

            !basketIsLoading && allAddBasketBtn[Number(myKey)]?.querySelector(".circle-loading")?.classList.remove("active");

            // setTimeout(() => {
            // }, 1000);

        } else {
            if (id) {
                const getBasketBtn = document.querySelectorAll(".basket-button")
                basketIsLoading && getBasketBtn[0].querySelector(".circle-loading")?.classList.add("active")
                !basketIsLoading && getBasketBtn[0].querySelector(".circle-loading")?.classList.remove("active")

                // setTimeout(() => {
                // }, 1000)

            } else {
                const allAddBasketBtn = document.querySelectorAll(".basket-button");
                basketIsLoading && allAddBasketBtn[Number(item.id) - 1]?.querySelector(".circle-loading")?.classList.add("active");

                !basketIsLoading && allAddBasketBtn[Number(item.id) - 1]?.querySelector(".circle-loading")?.classList.remove("active");
                // setTimeout(() => {
                // }, 1000);

            }
        }

    }


    useEffect(() => {
        setHaveBasket(basket?.find(data => data.id === item.id))
    }, [basket, item, haveBasket]);

    // Add to basket function
    const addToBasket = async (e: React.SyntheticEvent, item: IProducts) => {
        e.preventDefault();
        loadingProcess(item);
        await dispatch(addProductToBasketAsync(item));
        await dispatch(updateBasketItemCountAsync({ id: item.id, count: 1 }))
        if (id) {
            await dispatch(getProductByIdAsync(item.id))
        }
    }

    // Remove from basket function
    const removeFromBasket = async (e: React.SyntheticEvent, item: IProducts) => {
        e.preventDefault();
        loadingProcess(item);
        await dispatch(removeFromBasketAsync(item.id));
        await dispatch(updateBasketItemCountAsync({ id: item.id, count: 0 }))
        if (id) {
            await dispatch(getProductByIdAsync(item.id))
        }
    }

    return (
        <>
            {haveBasket?.id === item.id ?
                <button onClick={(e) => removeFromBasket(e, item)} className={`btn basket-button relative border-[2px] font-bold hover:shadow-[0_0_10px_2px_rgba(255,26,72,.75)] text-white bg-primaryRed border-primaryRed`}>
                    <span>Sepet'ten Çıkar</span>
                    <div className='absolute right-2 top-[10px]'>
                        <CircleLoading />
                    </div>

                </button>
                : <button onClick={(e) => addToBasket(e, item)} className={`btn basket-button relative border-[2px] font-bold bg-grayishBlue text-veryDarkBlue border-grayishBlue hover:text-white hover:bg-veryDarkBlue hover:border-veryDarkBlue`}>
                    <span>Sepete Ekle</span>
                    <div className='absolute right-2 top-[10px]'>
                        <CircleLoading />
                    </div>

                </button>
            }
        </>
    )
}

export default AddToBasketButton