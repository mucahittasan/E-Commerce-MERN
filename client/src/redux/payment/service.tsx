import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { IUser } from '../../@types/UserType'

interface OrderType {
    order: {
        name?: string
        lastName?: string,
        email?: string,
        address?: string
        cardNumber?: string,
        cardOwnerName?: string,
        expirationDateMonth?: string,
        expirationDateYear?: string,
        cvv?: string,
    }
    user: IUser
}

// ADD PERSON TO CONTACT
export const addPaymentToOrdersAsync = createAsyncThunk("payment/addPaymentToOrdersAsync", async ({ order, user }: OrderType) => {
    const res = await axios.post(`https://e-commerce-g1b7.onrender.com/orders/${user._id}`, order);
    return await res.data;
})