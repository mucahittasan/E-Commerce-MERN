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
            state.products = action.payload
            state.search = ""
        },
        inputSearch: (state, action) => {
            state.search = action.payload
        }
    },

})

export const { addSearchItemToProducts, inputSearch } = searchSlice.actions

export default searchSlice.reducer