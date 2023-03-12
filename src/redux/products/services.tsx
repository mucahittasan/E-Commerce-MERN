import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

// GET ALL PRODUCTS
export const getProductsAsync = createAsyncThunk("products/getProductsAsync", async () => {
    const res = await axios.get(`${process.env.REACT_APP_PORT}/items`);
    return await res.data;
})

// GET PRODUCTS BY PAGE
export const getProductsByPageAsync = createAsyncThunk("products/getProductsByPageAsync", async (page: number) => {
    const res = await axios.get(`${process.env.REACT_APP_PORT}/items?_page=${page}`);
    return await res.data;
})