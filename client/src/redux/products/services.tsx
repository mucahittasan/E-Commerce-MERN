import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

// Wait for it :)
const wait = (ms: number) =>
    new Promise<void>((resolve) => {
        setTimeout(() => resolve(), ms);
    });

// GET ALL PRODUCTS
export const getProductsAsync = createAsyncThunk("products/getProductsAsync", async () => {
    const res = await axios.get(`https://tired-slug-scrubs.cyclic.app/products`);
    await wait(1000)
    return await res.data;
})

// GET PRODUCT BY ID
export const getProductByIdAsync = createAsyncThunk("products/getProductByIdAsync", async (id: string) => {
    const res = await axios.get(`https://tired-slug-scrubs.cyclic.app/products/${id}`);
    return await res.data;
})