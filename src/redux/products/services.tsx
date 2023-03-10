import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'


export const getProductsAsync = createAsyncThunk("products/getProductsAsync", async () => {
    const res = await axios.get("")
    return await res.data
})