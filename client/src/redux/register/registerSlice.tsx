import { createSlice } from '@reduxjs/toolkit'


export type SearchState = {
    isLoading: boolean,
    error: null | string | undefined,
}

const initialState: SearchState = {
    isLoading: false,
    error: null,
}


export const registerSlice = createSlice({
    name: "register",
    initialState,
    reducers: {},
    extraReducers(builder) {

    },

})

export default registerSlice.reducer