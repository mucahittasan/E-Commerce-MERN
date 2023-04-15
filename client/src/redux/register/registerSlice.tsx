import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { getAllUserAsync, loginUserAsync, registerUserAsync } from './service'
import { IRegister, IUser } from '../../@types/UserType'

export type SearchState = {
    users: IRegister[] | null,
    user: IUser | undefined,
    isLoading: boolean,
    error: null | string | undefined,
}

const initialState: SearchState = {
    users: [],
    user: localStorage.getItem('user')
        ? JSON.parse(localStorage.getItem('user')!)
        : undefined,
    isLoading: false,
    error: null,
}


export const registerSlice = createSlice({
    name: "register",
    initialState,
    reducers: {
        logOut: (state, action: PayloadAction<void, string>) => {
            localStorage.setItem("user", JSON.stringify(""));
            state.user = undefined
        }
    },
    extraReducers(builder) {
        builder.addCase(registerUserAsync.pending, (state, action) => {
            state.isLoading = true;
        })
        builder.addCase(registerUserAsync.fulfilled, (state, action) => {
            state.isLoading = false;
        })
        builder.addCase(registerUserAsync.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
        })

        builder.addCase(getAllUserAsync.pending, (state, action) => {
            state.isLoading = true;
        })
        builder.addCase(getAllUserAsync.fulfilled, (state, action) => {
            state.users = action.payload
            state.isLoading = false;
        })
        builder.addCase(getAllUserAsync.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
        })

        builder.addCase(loginUserAsync.pending, (state, action) => {
            state.isLoading = true;
        })
        builder.addCase(loginUserAsync.fulfilled, (state, action) => {
            localStorage.setItem("user", JSON.stringify(action.payload));
            state.user = action.payload
            state.isLoading = false;
        })
        builder.addCase(loginUserAsync.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
        })
    },

})

export const { logOut } = registerSlice.actions

export default registerSlice.reducer