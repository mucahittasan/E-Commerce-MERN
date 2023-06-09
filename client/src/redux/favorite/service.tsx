import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { IProducts } from '../../@types/ProductTypes';
import { IUser } from '../../@types/UserType';

interface IAddProducttoFavorite {
    product: IProducts,
    user: IUser
}

interface IRemoveProductFromFavorites {
    id: string,
    user: IUser
}



// GET ALL FAVORITEs
export const getAllFavoritesAsync = createAsyncThunk("favorites/getAllFavoritesAsync", async () => {
    const user = localStorage.getItem('user')
        && JSON.parse(localStorage.getItem('user')!);

    const res = await axios.get(`https://tired-slug-scrubs.cyclic.app/favorites/${user._id}`);
    return res.data;
})

// ADD PRODUCT TO FAVORITES
export const addProductToFavorites = createAsyncThunk("favorites/addProductToFavorites", async ({ product, user }: IAddProducttoFavorite) => {
    const res = await axios.post(`https://tired-slug-scrubs.cyclic.app/favorites/${user._id}`, product);
    return res.data;
})

// REMOVE FROM FAVORITES
export const removeFromFavoritesAsync = createAsyncThunk("favorites/removeFromFavoritesAsync", async ({ user, id }: IRemoveProductFromFavorites) => {
    await axios.delete(`https://tired-slug-scrubs.cyclic.app/favorites/${user._id}/${id}`);
    return id;
})