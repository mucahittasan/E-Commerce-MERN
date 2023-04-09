import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { AppDispatch } from "../../../redux/store"
import { addUserInfo } from "../../../redux/payment/paymentSlice"

const PaymentUserInfo = () => {

    const dispatch = useDispatch<AppDispatch>()

    const [name, setName] = useState<string>("")
    const [lastName, setLastName] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [address, setAddress] = useState<string>("")

    useEffect(() => {
        const data = {
            name,
            lastName,
            email,
            address
        }

        dispatch(addUserInfo(data))

    }, [address, dispatch, email, lastName, name])

    return (
        <div className='border-2 dark:border-slate-600 flex-1 rounded-md w-full p-4 gap-y-2 flex flex-col'>
            <div className='flex gap-x-2 items-end md:flex-row flex-col gap-y-2'>
                <label className="flex flex-col w-full">
                    <input name="name" onChange={(e) => setName(e.target.value)} value={name} className={`contact-input`} type="text" placeholder="İsim" />
                </label>

                <label className="flex flex-col w-full">
                    <input name="lastName" onChange={(e) => setLastName(e.target.value)} value={lastName} className={`contact-input`} type="text" placeholder="Soy İsim" />
                </label>
            </div>

            <label className="flex flex-col w-full">
                <input name="email" onChange={(e) => setEmail(e.target.value)} value={email} className={`contact-input`} type="email" placeholder="E-Mail" />

            </label>

            <label className="w-full h-full flex">
                <textarea name="address" onChange={(e) => setAddress(e.target.value)} value={address} className={`contact-input h-full pt-1`} placeholder="Adres"></textarea>
            </label>
        </div>


    )
}

export default PaymentUserInfo