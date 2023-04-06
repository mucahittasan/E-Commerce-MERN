import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

interface IUpdateCount {
    id: number,
    count: number
}

// Wait for it :)
const wait = (ms: number) =>
    new Promise<void>((resolve) => {
        setTimeout(() => resolve(), ms);
    });

// GET ALL PRODUCTS
export const getProductsAsync = createAsyncThunk("products/getProductsAsync", async () => {
    const res = await axios.get(`https://typesciprt-e-commerce-api.vercel.app/items`);
    await wait(1000)
    return await res.data;
})

// GET PRODUCT BY ID
export const getProductByIdAsync = createAsyncThunk("products/getProductByIdAsync", async (id: number) => {
    const res = await axios.get(`https://typesciprt-e-commerce-api.vercel.app/items/${id}`);
    return await res.data;
})

// UPDATE PRODUCT COUNT
export const updateProductCountAsync = createAsyncThunk("products/updateProductCountAsync", async ({ id, count }: IUpdateCount) => {
    const res = await axios.patch(`https://typesciprt-e-commerce-api.vercel.app/items/${id}`, {
        count: count
    });
    return await res.data;
})