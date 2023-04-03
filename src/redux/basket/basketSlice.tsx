import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { addProductToBasketAsync, getAllBasketItemsAsync, removeFromBasketAsync, updateBasketItemCountAsync } from './service'
import { IProducts } from '../../@types/ProductTypes'


export type ProductState = {
    basket: IProducts[],
    itemOffset: number,
    isLoading: boolean,
    error: null | string | undefined,
    isAddBasketLoading: boolean
}

const initialState: ProductState = {
    basket: [],
    itemOffset: 0,
    isLoading: false,
    error: null,
    isAddBasketLoading: false
}


export const productSlice = createSlice({
    name: "basket",
    initialState,
    reducers: {
        setItemOffset: (state, action) => {
            state.itemOffset = action.payload
        }
    },
    extraReducers: (builder) => {

        // Add product to basket
        builder
            .addCase(addProductToBasketAsync.pending, (state, action) => {
                state.isAddBasketLoading = true;
            })
            .addCase(addProductToBasketAsync.fulfilled, (state, action: PayloadAction<IProducts>) => {
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

        // Update basket count
        builder
            .addCase(updateBasketItemCountAsync.fulfilled, (state, action) => {
            })
            .addCase(updateBasketItemCountAsync.rejected, (state, action) => {
                state.error = action.error.message;
            })

    }
})

export const { setItemOffset } = productSlice.actions

export default productSlice.reducer