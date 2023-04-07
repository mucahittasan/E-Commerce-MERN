// Libraries
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react";
import { Link } from "react-router-dom";
// Types
import { AppDispatch, RootState } from "../../redux/store"
// Services
import { getAllBasketItemsAsync } from "../../redux/basket/service";
// Components
import BasketItem from "../../components/basketItem";


const SepetPageContainer = () => {

    const dispatch = useDispatch<AppDispatch>();

    const shippingMoney = 26;

    const basketItems = useSelector((state: RootState) => state.basket.basket);

    useEffect(() => {
        dispatch(getAllBasketItemsAsync());
    }, [dispatch])


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
            {basketItems.length !== 0 ?
                <div className="flex my-12 gap-x-8 gap-y-16 items-start lg:flex-row flex-col">
                    <div className="flex flex-col gap-y-8">
                        {basketItems.map((basketItem, index) => (
                            <BasketItem item={basketItem} key={index} />
                        ))}
                    </div>
                    <div className="border-2 bg-white bottom-10 rounded-lg p-2 gap-y-2 flex flex-col border-grayishBlue w-full lg:w-auto md:min-w-[300px]">
                        <div className="flex justify-between gap-x-4">
                            <span className="text-darkGrayishBlue text-sm font-medium">Ürünün Toplamı</span>
                            <span className="whitespace-nowrap font-semibold">{formatter.format(totalPrice())} TL</span>
                        </div>
                        <div className="flex justify-between gap-x-4">
                            <span className="text-darkGrayishBlue text-sm font-medium">Kargo</span>
                            <span className="whitespace-nowrap font-semibold">{shippingMoney} TL</span>
                        </div>
                        {totalPrice() > 150 &&

                            <div className="flex justify-between gap-x-4">
                                <span className="text-darkGrayishBlue text-sm font-medium">150 TL ve üzeri kargo bedava</span>
                                <span className="whitespace-nowrap font-semibold text-primaryRed">-{shippingMoney} TL</span>
                            </div>
                        }

                        <div className="flex justify-between gap-x-4 border-t-2 pt-2">
                            <span className="text-darkGrayishBlue text-sm font-medium">Toplam</span>
                            <span className="whitespace-nowrap font-semibold ">{totalPrice() < 150 ? formatter.format(totalPrice() + shippingMoney) : formatter.format(totalPrice() - shippingMoney)} TL</span>

                        </div>

                        <Link to="/basket/payment" className="btn justify-center flex text-white font-bold bg-primaryRed mt-4">
                            Sepeti Onayla
                        </Link>
                    </div>
                </div>
                : <div className='font-bold text-lg text-veryDarkBlue'>Sepetinizde ürün yok, ürün eklemek için <Link to="/shop" className='text-primaryRed underline'>alışveriş</Link>  bölümüne gidebilirsiniz.  </div>}

        </div>
    )
}

export default SepetPageContainer