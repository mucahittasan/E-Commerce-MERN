import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { IProducts } from '../../@types/ProductTypes';


// GET ALL FAVORITEs
export const getAllFavoritesAsync = createAsyncThunk("favorites/getAllFavoritesAsync", async () => {
    const res = await axios.get(`https://typesciprt-e-commerce-api.vercel.app/favorites`,);
    return res.data;
})

// ADD PRODUCT TO FAVORITES
export const addProductToFavorites = createAsyncThunk("favorites/addProductToFavorites", async (product: IProducts) => {
    const res = await axios.post(`https://typesciprt-e-commerce-api.vercel.app/favorites`, product);
    return res.data;
})

// REMOVE FROM FAVORITES
export const removeFromFavoritesAsync = createAsyncThunk("favorites/removeFromFavoritesAsync", async (id: number) => {
    await axios.delete(`https://typesciprt-e-commerce-api.vercel.app/favorites/${id}`);
    return id;
})