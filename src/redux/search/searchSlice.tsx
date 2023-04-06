import { createSlice } from '@reduxjs/toolkit'
import { IProducts } from '../../@types/ProductTypes'


export type SearchState = {
    products: IProducts[] | [] | null,
    search: string,
    currentProduct: IProducts | undefined,
    isLoading: boolean,
    error: null | string | undefined,
}

const initialState: SearchState = {
    products: [],
    search: "",
    currentProduct: undefined,
    isLoading: false,
    error: null,
}


export const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        addSearchItemToProducts: (state, action) => {
            if (state.search === "") {
                state.products = [];
            } else {
                state.products = action.payload
            }
        },
        inputSearch: (state, action) => {
            state.search = action.payload
        },
        clearSearchProducts: (state) => {
            state.products = [];
            state.search = ""
        }
    },

})

export const { addSearchItemToProducts, inputSearch, clearSearchProducts } = searchSlice.actions

export default searchSlice.reducer