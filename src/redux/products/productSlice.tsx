import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getProductsAsync } from './services'

export interface ProductState {
    products: [],
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
    reducers: {

    },
    extraReducers: (builder) => {
        // Get Products Progress
        builder.addCase(getProductsAsync.pending, (state, action) => {
            state.isLoading = true;
        })
        builder.addCase(getProductsAsync.fulfilled, (state, action) => {
            //...
        })
        builder.addCase(getProductsAsync.rejected, (state, action) => {
            state.error = action.error.message;
        })
    }
})

export const { } = productSlice.actions

export default productSlice.reducer