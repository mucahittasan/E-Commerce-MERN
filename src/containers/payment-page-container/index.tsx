// Libraries
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
// Components
import PaymentUserInfo from '../../components/payment/paymentUserInfo'
import PaymentCardInfo from '../../components/payment/paymentCardInfo'
// Types
import { AppDispatch, RootState } from '../../redux/store'
// Services
import { addPaymentToOrdersAsync } from '../../redux/payment/service'


interface IPaymentInfo {
    name: string
    lastName: string,
    email: string,
    address: string
    cardNumber: string,
    cardOwnerName: string,
    expirationDateMonth: string,
    expirationDateYear: string,
    cvv: string
}

const PaymentPageContainer = () => {

    const cardInfo = useSelector((state: RootState) => state.payment.paymentCardInfo)
    const userInfo = useSelector((state: RootState) => state.payment.paymentUserInfo)
    const basket = useSelector((state: RootState) => state.basket.basket)

    const dispatch = useDispatch<AppDispatch>();


    const navigate = useNavigate();

    const handleSubmit = async (e: React.SyntheticEvent) => {
        e.preventDefault();

        let allEmpty

        const paymentInfo = { ...cardInfo, ...userInfo };

        for (const paymentProperty in paymentInfo) {
            // Check if the current property is empty
            if (paymentInfo[paymentProperty as keyof IPaymentInfo]?.length === 0) {
                allEmpty = true
                break
            }
        }

        if (basket.length === 0) {
            toast.warn("Sepetiniz bos!")
        } else {

            if (!allEmpty) {
                await dispatch(addPaymentToOrdersAsync(paymentInfo));
                navigate("/success-order")
            } else {
                toast.warn("Eksik veya hatali bilgi girdiniz!")
            }

        }

    }


    return (
        <div className='main-container'>
            <h2 className='main-title mb-8'>Ödeme Alanı</h2>
            <form onSubmit={(e) => handleSubmit(e)} className='mx-auto items-center w-full flex flex-col mb-12'>
                <div className='flex gap-x-8 items-stretch'>
                    <div className='flex-1 flex flex-col'>
                        <h3 className='main-title'>Kart Sahibi Bilgileri</h3>
                        <PaymentUserInfo />
                    </div>
                    <div className='flex-1'>
                        <h3 className='main-title'>Kart Bilgileri</h3>
                        <PaymentCardInfo />
                    </div>
                </div>
                <button type='submit' className='btn mt-8 flex max-w-xs justify-center bg-primaryRed w-full text-white font-bold'>Siparisi Onayla</button>
            </form>
        </div>
    )
}

export default PaymentPageContainer