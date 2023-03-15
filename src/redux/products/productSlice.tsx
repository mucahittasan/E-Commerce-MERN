import { createSlice } from '@reduxjs/toolkit'
import { addProductToBasketAsync, getAllBasketItemsAsync, getProductsAsync, removeFromBasketAsync } from './services'
import { IProducts } from '../../@types/ProductTypes'


export type ProductState = {
    products: IProducts[] | [],
    basket: IProducts[],
    isLoading: boolean,
    error: null | string | undefined,
    isAddBasketLoading: boolean
}

const initialState: ProductState = {
    products: [],
    basket: [],
    isLoading: false,
    error: null,
    isAddBasketLoading: false
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

        // Add product to basket
        builder
            .addCase(addProductToBasketAsync.pending, (state, action) => {
                state.isAddBasketLoading = true;
            })
            .addCase(addProductToBasketAsync.fulfilled, (state, action) => {
                state.isAddBasketLoading = false;
                state.basket.push(action.payload);
            })
            .addCase(addProductToBasketAsync.rejected, (state, action) => {
                state.isAddBasketLoading = false;
                state.error = action.error.message
            });

        // Get all basket items
        builder
            .addCase(getAllBasketItemsAsync.pending, (state, action) => {
                state.isAddBasketLoading = true;
            })
            .addCase(getAllBasketItemsAsync.fulfilled, (state, action) => {
                state.basket = action.payload;
            })
            .addCase(getAllBasketItemsAsync.rejected, (state, action) => {
                state.isAddBasketLoading = false;
                state.error = action.error.message
            });

        // Remove from basket
        builder
            .addCase(removeFromBasketAsync.pending, (state, action) => {
                state.isAddBasketLoading = true;
            })
            .addCase(removeFromBasketAsync.fulfilled, (state, action) => {
                state.isAddBasketLoading = false;
                const newBasket = state.basket.filter(item => item.id !== action.payload)
                state.basket = newBasket
            })
            .addCase(removeFromBasketAsync.rejected, (state, action) => {
                state.isAddBasketLoading = false;
                state.error = action.error.message
            });

    }
})

// export const { } = productSlice.actions

export default productSlice.reducer