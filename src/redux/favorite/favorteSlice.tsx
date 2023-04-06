import { createSlice } from '@reduxjs/toolkit'
import { IProducts } from '../../@types/ProductTypes'
import { addProductToFavorites, getAllFavoritesAsync, removeFromFavoritesAsync } from './service'


export type ProductState = {
    favorites: IProducts[],
    isLoading: boolean,
    error: null | string | undefined,
}

const initialState: ProductState = {
    favorites: [],
    isLoading: false,
    error: null,
}


export const productSlice = createSlice({
    name: "favorite",
    initialState,
    reducers: {},
    extraReducers: (builder) => {

        // Add To Favorites
        builder
            .addCase(addProductToFavorites.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(addProductToFavorites.fulfilled, (state, action) => {
                state.favorites.push(action.payload)
            })
            .addCase(addProductToFavorites.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            })

        // Get All Favorites
        builder
            .addCase(getAllFavoritesAsync.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(getAllFavoritesAsync.fulfilled, (state, action) => {
                state.isLoading = false;
                state.favorites = action.payload
            })
            .addCase(getAllFavoritesAsync.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            })

        // Remove from favorites
        builder
            .addCase(removeFromFavoritesAsync.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(removeFromFavoritesAsync.fulfilled, (state, action) => {
                state.isLoading = false;
                const newBasket = state.favorites.filter(item => item.id !== action.payload)
                state.favorites = newBasket
            })
            .addCase(removeFromFavoritesAsync.rejected, (state, action) => {
                state.isLoading = true;
                state.error = action.error.message
            });

    }
})

export default productSlice.reducer