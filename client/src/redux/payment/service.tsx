import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

interface OrderType {
    name?: string
    lastName?: string,
    email?: string,
    address?: string
    cardNumber?: string,
    cardOwnerName?: string,
    expirationDateMonth?: string,
    expirationDateYear?: string,
    cvv?: string
}

// ADD PERSON TO CONTACT
export const addPaymentToOrdersAsync = createAsyncThunk("payment/addPaymentToOrdersAsync", async (order: OrderType) => {
    const res = await axios.post(`https://e-commerce-g1b7.onrender.com/payment`, order);
    return await res.data;
})