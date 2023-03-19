import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store';
import { IProductItem, IProducts } from '../../@types/ProductTypes';
import { addProductToBasketAsync, getAllBasketItemsAsync, removeFromBasketAsync } from '../../redux/basket/service';
import CircleLoading from '../circleLoading';
import { getProductByIdAsync, updateProductCountAsync } from '../../redux/products/services';
import { useNavigate, useParams } from 'react-router-dom';

const AddToBasketButton: React.FC<IProductItem> = ({ item }) => {

    // Is item in basket array 
    const [haveBasket, setHaveBasket] = useState<IProducts | undefined>();

    const basket = useSelector((state: RootState) => state.basket.basket);

    const itemOffset = useSelector((state: RootState) => state.basket.itemOffset)

    const dispatch = useDispatch<AppDispatch>()

    const { id } = useParams()

    // When we click the add basket button than this function will work and it will give an active class to clicked button and 1000ms after it will remove
    const loadingProcess = (item: IProducts) => {

        if (id) {
            const getBasketBtn = document.querySelectorAll(".basket-button")
            getBasketBtn[0].querySelector(".circle-loading")?.classList.add("active")

            setTimeout(() => {
                getBasketBtn[0].querySelector(".circle-loading")?.classList.remove("active")
            }, 1000)
        } else {
            const allAddBasketBtn = document.querySelectorAll(".basket-button");

            allAddBasketBtn[Number(item.id) - Number(itemOffset) - 1]?.querySelector(".circle-loading")?.classList.add("active");

            setTimeout(() => {
                allAddBasketBtn[Number(item.id) - Number(itemOffset) - 1]?.querySelector(".circle-loading")?.classList.remove("active");
            }, 1000);
        }
    }


    useEffect(() => {
        setHaveBasket(basket?.find(data => data.id === item.id))
    }, [basket, item, haveBasket]);

    useEffect(() => {
        dispatch(getAllBasketItemsAsync())
    }, [dispatch])

    // Add to basket function
    const addToBasket = async (e: React.SyntheticEvent, item: IProducts) => {
        e.preventDefault();
        loadingProcess(item);
        await dispatch(updateProductCountAsync({ id: item.id, count: 1 }))
        await dispatch(addProductToBasketAsync(item));
        if (id) {
            await dispatch(getProductByIdAsync(item.id))
        }
    }

    // Remove from basket function
    const removeFromBasket = async (e: React.SyntheticEvent, item: IProducts) => {
        e.preventDefault();
        loadingProcess(item);
        await dispatch(updateProductCountAsync({ id: item.id, count: 0 }))
        await dispatch(removeFromBasketAsync(item.id));
        if (id) {
            await dispatch(getProductByIdAsync(item.id))
        }
    }

    return (
        <>
            {haveBasket?.id === item.id ?
                <button onClick={(e) => removeFromBasket(e, item)} className={`btn basket-button relative justify-between border-[2px] font-bold hover:shadow-[0_0_10px_2px_rgba(255,26,72,.75)] text-white bg-primaryRed border-primaryRed`}>
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
        </>
    )
}

export default AddToBasketButton