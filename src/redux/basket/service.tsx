import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { IProducts } from '../../@types/ProductTypes';

// Wait for it :)
const wait = (ms: number) =>
    new Promise<void>((resolve) => {
        setTimeout(() => resolve(), ms);
    });

interface IUpdateCount {
    id: number,
    count: number
}


// ADD PRODUCT TO BASKET
export const addProductToBasketAsync = createAsyncThunk("basket/addProductToBasketAsync", async (product: IProducts) => {
    await wait(1000)
    const res = await axios.post(`https://typesciprt-e-commerce-api.vercel.app/basket`, product);
    return await res.data;
})

// DELETE FROM BASKET
export const removeFromBasketAsync = createAsyncThunk("basket/removeFromBasketAsync", async (id: number) => {
    await wait(1000)
    await axios.delete(`https://typesciprt-e-commerce-api.vercel.app/basket/${id}`);
    return id;
})

// GET ALL BASKET ITEMS
export const getAllBasketItemsAsync = createAsyncThunk("basket/getAllBasketItemsAsync", async () => {
    const res = await axios.get(`https://typesciprt-e-commerce-api.vercel.app/basket`);
    return res.data;
})

// UPDATE PRODUCT COUNT
export const updateBasketItemCountAsync = createAsyncThunk("basket/updateBasketItemCountAsync", async ({ id, count }: IUpdateCount) => {
    const res = await axios.patch(`https://typesciprt-e-commerce-api.vercel.app/basket/${id}`, {
        count: count
    });
    return await res.data;
})

// DELETE ALL ITEMS IN ARRAY
export const removeAllItemsInBasketAsync = createAsyncThunk("basket/removeAllItemsInBasketAsync", async (products: IProducts[]) => {
    products.map(async (product) => {
        return await axios.delete(`https://typesciprt-e-commerce-api.vercel.app/basket/${product.id}`);
    })
})
