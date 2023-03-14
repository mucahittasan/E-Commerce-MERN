import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

const wait = (ms: number) =>
    new Promise<void>((resolve) => {
        setTimeout(() => resolve(), ms);
    });

// GET ALL PRODUCTS
export const getProductsAsync = createAsyncThunk("products/getProductsAsync", async () => {
    const res = await axios.get(`${process.env.REACT_APP_PORT}/items`);
    await wait(1000)
    return await res.data;
})
