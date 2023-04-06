import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { AppDispatch, RootState } from '../../redux/store'
import { removeAllItemsInBasketAsync } from '../../redux/basket/service'

const OrderSuccessPage = () => {

    const dispatch = useDispatch<AppDispatch>();

    const basket = useSelector((state: RootState) => state.basket.basket)

    useEffect(() => {
        dispatch(removeAllItemsInBasketAsync(basket));
    }, [dispatch])

    return (
        <div className='flex flex-col items-center justify-center min-h-screenSize text-3xl font-semibold gap-y-6'>
            <p>Siparişiniz başarılı bir şekilde alınmıştır 🎉</p>
            <span className='text-xl'><Link to="/shop" className='text-primaryRed'>Alışveriş'e</Link> tam gaz devam edebilirsiniz.</span>
        </div>
    )
}

export default OrderSuccessPage