import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { IProducts } from '../../@types/ProductTypes';


// GET ALL FAVORITEs
export const getAllFavoritesAsync = createAsyncThunk("favorites/getAllFavoritesAsync", async () => {
    const res = await axios.get(`http://localhost:5000/favorites`);
    return res.data;
})

// ADD PRODUCT TO FAVORITES
export const addProductToFavorites = createAsyncThunk("favorites/addProductToFavorites", async (product: IProducts) => {
    const res = await axios.post(`http://localhost:5000/favorites`, product);
    return res.data;
})

// REMOVE FROM FAVORITES
export const removeFromFavoritesAsync = createAsyncThunk("favorites/removeFromFavoritesAsync", async (id: string) => {
    await axios.delete(`http://localhost:5000/favorites/${id}`);
    return id;
})