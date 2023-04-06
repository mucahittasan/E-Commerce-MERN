import PaymentUserInfo from '../../components/payment/paymentUserInfo'
import PaymentCardInfo from '../../components/payment/paymentCardInfo'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../redux/store'
import { addPaymentToOrdersAsync } from '../../redux/payment/service'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'


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
    const allInfos = useSelector((state: RootState) => state.payment.allInfos)

    const dispatch = useDispatch<AppDispatch>();

    const [allEmpty, setAllEmpty] = useState<boolean>();

    const navigate = useNavigate();

    const handleSubmit = async (e: React.SyntheticEvent) => {
        e.preventDefault();

        const paymentInfo = { ...cardInfo, ...userInfo };

        for (const paymentProperty in paymentInfo) {
            // Check if the current property is empty
            if (paymentInfo[paymentProperty as keyof IPaymentInfo]?.length === 0) {
                alert(`${paymentProperty} is empty!`)
                setAllEmpty(true)
                break
            } else {
                setAllEmpty(false)
            }
        }

        if (!allEmpty) {
            await dispatch(addPaymentToOrdersAsync(paymentInfo));
            navigate("/success-order")
        }

    }

    useEffect(() => {
        console.log(allInfos)
    }, [allInfos])


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