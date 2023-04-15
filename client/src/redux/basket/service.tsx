import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { IProducts } from '../../@types/ProductTypes';
import { IUser } from '../../@types/UserType';

// Wait for it :)
const wait = (ms: number) =>
    new Promise<void>((resolve) => {
        setTimeout(() => resolve(), ms);
    });

interface IAddToBasket {
    count: number,
    product: IProducts,
    user: IUser
}

interface IUpdateCount {
    count: number,
    id: number,
    user: IUser
}

interface IRemoveBasket {
    id: string,
    user: IUser
}


// ADD PRODUCT TO BASKET
export const addProductToBasketAsync = createAsyncThunk("basket/addProductToBasketAsync", async ({ product, count, user }: IAddToBasket, { getState }) => {
    await wait(1000)

    if (user) {
        const res = await axios.post(`http://localhost:5000/basket/${user._id}`, product);

        await axios.put(`http://localhost:5000/basket/${user._id}`, {
            id: product.id,
            count: count
        });

        return await res.data;
    }
})

// DELETE FROM BASKET
export const removeFromBasketAsync = createAsyncThunk("basket/removeFromBasketAsync", async ({ id, user }: IRemoveBasket) => {
    await wait(1000)
    await axios.delete(`http://localhost:5000/basket/${user._id}/${id}`);
    return id;
})

// GET ALL BASKET ITEMS
export const getAllBasketItemsAsync = createAsyncThunk("basket/getAllBasketItemsAsync", async () => {
    const user = localStorage.getItem('user')
        && JSON.parse(localStorage.getItem('user')!);

    const res = await axios.get(`http://localhost:5000/basket/${user._id}`);
    return res.data;
})

// UPDATE PRODUCT COUNT
export const updateBasketItemCountAsync = createAsyncThunk("basket/updateBasketItemCountAsync", async ({ user, id, count }: IUpdateCount) => {
    await axios.put(`http://localhost:5000/basket/${user._id}`, {
        id,
        count: count
    });
})

// DELETE ALL ITEMS IN ARRAY
export const removeAllItemsInBasketAsync = createAsyncThunk("basket/removeAllItemsInBasketAsync", async (user: IUser) => {
    await axios.delete(`http://localhost:5000/basket/${user._id}`);
})
