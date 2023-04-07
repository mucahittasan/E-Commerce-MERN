// Libraries
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
// Types
import { AppDispatch } from "../../../redux/store";
// Actions
import { addCardInfo } from "../../../redux/payment/paymentSlice";


const PaymentCardInfo = () => {

    const dispatch = useDispatch<AppDispatch>();

    const [cardNumber, setCardNumber] = useState<string>("")
    const [cardOwnerName, setCardOwnerName] = useState<string>("")
    const [expirationDateMonth, setExpirationDateMonth] = useState<string>('')
    const [expirationDateYear, setExpirationDateYear] = useState<string>('')
    const [cvv, setCvv] = useState<string>('')

    function formatCardNumber(cardNumber: string) {
        // Remove non-numeric characters
        const numericCardNumber = cardNumber.replace(/\D/g, '');

        // Add a space after every fourth digit
        let formattedCardNumber = '';
        for (let i = 0; i < numericCardNumber.length; i++) {
            if (i > 0 && i % 4 === 0) {
                formattedCardNumber += ' ';
            }
            formattedCardNumber += numericCardNumber.charAt(i);
        }

        return formattedCardNumber;
    }

    function handleCardNumberChange(event: React.ChangeEvent<HTMLInputElement>) {
        const { value } = event.target;
        setCardNumber(formatCardNumber(value))
    }

    useEffect(() => {

        const data = {
            cardNumber,
            cardOwnerName,
            expirationDateMonth,
            expirationDateYear,
            cvv
        }

        dispatch(addCardInfo(data))
    }, [cardNumber, cvv, expirationDateMonth, expirationDateYear, dispatch, cardOwnerName])

    return (
        <div className='border-2 rounded-md w-full p-4 gap-y-8 flex flex-col'>
            <label className="flex flex-col w-full gap-y-2">
                <span className="text-sm text-darkGrayishBlue font-semibold">Kart Numarası</span>
                <input maxLength={19} onChange={(e) => handleCardNumberChange(e)} value={cardNumber} className={`contact-input`} type="text" placeholder="**** **** **** ****" />
            </label>

            <label className="flex flex-col w-full gap-y-2">
                <span className="text-sm text-darkGrayishBlue font-semibold">Kartu Üzerindeki İsim</span>
                <input name="cardOwnerName" onChange={(e) => setCardOwnerName(e.target.value)} value={cardOwnerName} className={`contact-input`} type="text" placeholder="Kartın üzerindeki ad ve soyad" />
            </label>

            <div className="flex gap-x-2 xl:flex-row flex-col">
                <label className="w-full xl:max-w-none lg:max-w-[250px]">
                    <span className="text-sm text-darkGrayishBlue font-semibold">Son Kullanma Tarihi - <span className="text-veryDarkBlue font-bold">Ay</span></span>
                    <input maxLength={2} max={31} name="expirationDateMonth" onChange={(e) => setExpirationDateMonth(e.target.value)} value={expirationDateMonth} className={`contact-input`} type="text" />
                </label>
                <label className="w-full xl:max-w-none lg:max-w-[250px]">
                    <span className="text-sm text-darkGrayishBlue font-semibold">Son Kullanma Tarihi - <span className="text-veryDarkBlue font-bold">Yıl</span></span>
                    <input maxLength={4} minLength={4} min={2023} max={2050} name="expirationDateYear" onChange={(e) => setExpirationDateYear(e.target.value)} value={expirationDateYear} className={`contact-input `} type="text" />
                </label>
                <label className="w-full xl:max-w-none lg:max-w-[250px]">
                    <span className="text-sm text-darkGrayishBlue font-semibold">CVV</span>
                    <input maxLength={3} name="cvv" onChange={(e) => setCvv(e.target.value)} value={cvv} className={`contact-input`} type="text" />
                </label>
            </div>

        </div>


    )
}

export default PaymentCardInfo