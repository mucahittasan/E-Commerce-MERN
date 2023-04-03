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

    const totalPrice = () => {
        let result = 0;
        basketItems.forEach(item => {
            if (item.count !== 0) {
                result += item.count * item.price
            }
        })
        return result
    }

    const formatter = new Intl.NumberFormat('tr-TR');


    return (
        <div className="main-container">
            <h2 className="main-title">Sepetim</h2>
            <div className="flex my-12 gap-x-8 items-start">
                <div className="flex flex-col gap-y-8">
                    {basketItems.map((basketItem, index) => (
                        <BasketItem item={basketItem} key={index} />
                    ))}
                </div>
                <div className="border-2 rounded-lg p-2 gap-y-2 flex flex-col border-grayishBlue w-1/4">
                    <div className="flex justify-between gap-x-4">
                        <span className="text-darkGrayishBlue text-sm font-medium">Ürünün Toplamı</span>
                        <span className="whitespace-nowrap font-semibold">{formatter.format(totalPrice())} TL</span>
                    </div>
                    <div className="flex justify-between gap-x-4">
                        <span className="text-darkGrayishBlue text-sm font-medium">Kargo</span>
                        <span className="whitespace-nowrap font-semibold">26 TL</span>
                    </div>
                    <div className="flex justify-between gap-x-4">
                        <span className="text-darkGrayishBlue text-sm font-medium">3 ürün ve üzeri kargo bedava</span>
                        <span className="whitespace-nowrap font-semibold text-primaryRed">-26 TL</span>
                    </div>
                    {basketItems.length > 3 && <div className="flex justify-between gap-x-4 border-t-2 pt-2">
                        <span className="text-darkGrayishBlue text-sm font-medium">Toplam</span>
                        <span className="whitespace-nowrap font-semibold ">{formatter.format(totalPrice() - 26)} TL</span>
                    </div>}
                    <button className="btn justify-center flex text-white font-bold bg-primaryRed mt-4">
                        Sepeti Onayla
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SepetPageContainer