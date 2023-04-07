import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { IProducts } from '../../@types/ProductTypes';

// Wait for it :)
const wait = (ms: number) =>
    new Promise<void>((resolve) => {
        setTimeout(() => resolve(), ms);
    });

interface IAddToBasket {
    count: number,
    product: IProducts
}

interface IUpdateCount {
    count: number,
    id: string
}


// ADD PRODUCT TO BASKET
export const addProductToBasketAsync = createAsyncThunk("basket/addProductToBasketAsync", async ({ product, count }: IAddToBasket, { getState }) => {
    await wait(1000)
    const res = await axios.post(`https://e-commerce-g1b7.onrender.com/basket`, product);
    await axios.put(`https://e-commerce-g1b7.onrender.com/basket/${product._id}`, {
        count: count
    });
    return await res.data;
})

// DELETE FROM BASKET
export const removeFromBasketAsync = createAsyncThunk("basket/removeFromBasketAsync", async (id: string) => {
    await wait(1000)
    await axios.delete(`https://e-commerce-g1b7.onrender.com/basket/${id}`);
    return id;
})

// GET ALL BASKET ITEMS
export const getAllBasketItemsAsync = createAsyncThunk("basket/getAllBasketItemsAsync", async () => {
    const res = await axios.get(`https://e-commerce-g1b7.onrender.com/basket`);
    return res.data;
})

// UPDATE PRODUCT COUNT
export const updateBasketItemCountAsync = createAsyncThunk("basket/updateBasketItemCountAsync", async ({ id, count }: IUpdateCount) => {
    await axios.put(`https://e-commerce-g1b7.onrender.com/basket/${id}`, {
        count: count
    });
})

// DELETE ALL ITEMS IN ARRAY
export const removeAllItemsInBasketAsync = createAsyncThunk("basket/removeAllItemsInBasketAsync", async (products: IProducts[]) => {
    await axios.delete(`https://e-commerce-g1b7.onrender.com/basket`);
})
