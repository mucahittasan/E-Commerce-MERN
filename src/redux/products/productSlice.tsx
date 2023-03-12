import { createSlice } from '@reduxjs/toolkit'
import { getProductsAsync, getProductsByPageAsync } from './services'
import { IProducts } from '../../@types/productsType'


export type ProductState = {
    products: IProducts[] | [],
    isLoading: boolean,
    error: null | string | undefined
}

const initialState: ProductState = {
    products: [],
    isLoading: false,
    error: null
}


export const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // Get Products
        builder
            .addCase(getProductsAsync.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(getProductsAsync.fulfilled, (state, action) => {
                state.isLoading = false;
                state.products = action.payload
            })
            .addCase(getProductsAsync.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            })

        // Get Products By Page
        builder
            .addCase(getProductsByPageAsync.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(getProductsByPageAsync.fulfilled, (state, action) => {
                state.products = action.payload;
            })
            .addCase(getProductsByPageAsync.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            })
    }
})

// export const { } = productSlice.actions

export default productSlice.reducer