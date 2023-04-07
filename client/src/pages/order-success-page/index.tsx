// Libraries
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
// Types
import { AppDispatch, RootState } from '../../redux/store'
// Services
import { removeAllItemsInBasketAsync } from '../../redux/basket/service'

const OrderSuccessPage = () => {

    const dispatch = useDispatch<AppDispatch>();

    const basket = useSelector((state: RootState) => state.basket.basket)

    useEffect(() => {
        dispatch(removeAllItemsInBasketAsync(basket));
    }, [])

    return (
        <div className='flex flex-col lg:px-0 px-4 text-center items-center justify-center min-h-screenSize text-[clamp(22px,2.7272vw,30px)] font-semibold gap-y-6'>
            <p>Siparişiniz başarılı bir şekilde alınmıştır 🎉</p>
            <span className='text-[clamp(14px,1.818vw,20px)]'><Link to="/shop" className='text-primaryRed'>Alışveriş'e</Link> tam gaz devam edebilirsiniz.</span>
        </div>
    )
}

export default OrderSuccessPage