// React libraries
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
// Types
import { AppDispatch, RootState } from '../../redux/store';
import { IProducts } from '../../@types/ProductTypes';
// Service Actions of Basket
import { addProductToBasketAsync, removeFromBasketAsync } from '../../redux/basket/service';
// Components
import CircleLoading from '../circleLoading';

export interface IAddToBasketProps {
    item: {
        _id: string,
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

    const dispatch = useDispatch<AppDispatch>()

    const { id } = useParams()

    const location = window.location.pathname


    // When we click the add basket button than this function will work and it will give an active class to clicked button and 1000ms after it will remove
    const loadingProcess = (item: IProducts) => {

        if (location !== "/shop" && id === undefined) {
            const allAddBasketBtn = document.querySelectorAll(".basket-button");
            allAddBasketBtn[Number(myKey)]?.querySelector(".circle-loading")?.classList.add("active");

            setTimeout(() => {
                allAddBasketBtn[Number(myKey)]?.querySelector(".circle-loading")?.classList.remove("active");
            }, 1000);

        } else {
            if (id) {
                const getBasketBtn = document.querySelectorAll(".basket-button")
                getBasketBtn[0].querySelector(".circle-loading")?.classList.add("active")

                setTimeout(() => {
                    getBasketBtn[0].querySelector(".circle-loading")?.classList.remove("active")
                }, 1000)

            } else {
                const allAddBasketBtn = document.querySelectorAll(".basket-button");
                allAddBasketBtn[Number(item.id) - 1]?.querySelector(".circle-loading")?.classList.add("active");

                setTimeout(() => {
                    allAddBasketBtn[Number(item.id) - 1]?.querySelector(".circle-loading")?.classList.remove("active");
                }, 1000);

            }
        }

    }

    // Add to basket function
    const addToBasket = async (e: React.SyntheticEvent, item: IProducts) => {
        e.preventDefault();
        loadingProcess(item);


        await dispatch(addProductToBasketAsync({ product: item, count: 1 }))

    }

    // Remove from basket function
    const removeFromBasket = async (e: React.SyntheticEvent, item: IProducts) => {
        e.preventDefault();
        loadingProcess(item);

        await dispatch(removeFromBasketAsync(item._id));

    }

    useEffect(() => {
        setHaveBasket(basket?.find(data => data.id === item.id))
    }, [basket, item, haveBasket]);


    return (
        <>
            {haveBasket?.id === item.id ?
                <button onClick={(e) => removeFromBasket(e, item)} className={`btn basket-button relative border-[2px] font-bold hover:shadow-[0_0_10px_2px_rgba(255,26,72,.75)] text-white bg-primaryRed border-primaryRed`}>
                    <span>Sepet'ten Çıkar</span>
                    <div className='absolute right-2 top-[10px]'>
                        <CircleLoading />
                    </div>

                </button>
                : <button onClick={(e) => addToBasket(e, item)} className={`btn basket-button relative border-[2px] font-bold bg-grayishBlue dark:hover:border-primaryRed dark:hover:bg-primaryRed text-veryDarkBlue border-grayishBlue hover:text-white hover:bg-veryDarkBlue hover:border-veryDarkBlue`}>
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