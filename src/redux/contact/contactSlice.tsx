import { createSlice } from '@reduxjs/toolkit'
import { IContactType } from '../../@types/ContactType'
import { addPersonToContactAsync } from './service'


export type ContactState = {
    contactInfo: IContactType | null,
    isLoading: boolean,
    error: null | string | undefined,
}

const initialState: ContactState = {
    contactInfo: null,
    isLoading: false,
    error: null
}


export const contactSlice = createSlice({
    name: "contact",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(addPersonToContactAsync.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(addPersonToContactAsync.fulfilled, (state, action) => {
                state.isLoading = false
            })
            .addCase(addPersonToContactAsync.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.error.message
            })
    }
})


export default contactSlice.reducer