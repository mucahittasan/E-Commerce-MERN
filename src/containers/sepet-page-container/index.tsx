import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../../redux/store"
import { useEffect } from "react";
import { getAllBasketItemsAsync } from "../../redux/basket/service";
import BasketItem from "../../components/basketItem";


const SepetPageContainer = () => {

    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(getAllBasketItemsAsync());
    }, [dispatch])

    const basketItems = useSelector((state: RootState) => state.basket.basket);

    return (
        <div className="main-container">
            <h2 className="main-title">Sepetim</h2>
            <div className="flex flex-col gap-y-8 my-12">
                {basketItems.map((basketItem, index) => (
                    <BasketItem item={basketItem} key={index} />
                ))}
            </div>
        </div>
    )
}

export default SepetPageContainer