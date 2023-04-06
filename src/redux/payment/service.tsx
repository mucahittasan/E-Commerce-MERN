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
    const res = await axios.post(`${process.env.REACT_APP_PORT}/orders`, order);
    return await res.data;
})