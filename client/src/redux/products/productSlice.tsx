import { createSlice } from '@reduxjs/toolkit'
import { getProductByIdAsync, getProductsAsync } from './services'
import { IProducts } from '../../@types/ProductTypes'


export type ProductState = {
    products: IProducts[] | [],
    currentProduct: IProducts | undefined,
    isLoading: boolean,
    error: null | string | undefined,
}

export interface IncrementProductCountPayload {
    productId: number;
    count: number;
}

const initialState: ProductState = {
    products: [],
    currentProduct: undefined,
    isLoading: false,
    error: null,
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

        // Get product by id
        builder
            .addCase(getProductByIdAsync.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(getProductByIdAsync.fulfilled, (state, action) => {
                state.isLoading = false;
                state.currentProduct = action.payload
            })
            .addCase(getProductByIdAsync.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            })

    }
})


export default productSlice.reducer