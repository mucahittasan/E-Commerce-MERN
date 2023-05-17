import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { ILogin, IRegister } from '../../@types/UserType';

// REGISTER
export const registerUserAsync = createAsyncThunk("register/registerUserAsync", async (user: IRegister) => {
    try {
        const res = await axios.post(`https://frail-frog-leather-jacket.cyclic.app/auth/register`, user);
        return await res.data;
    } catch (error) {
        throw new Error("Something went wrong!")
    }

})

// LOGIN
export const loginUserAsync = createAsyncThunk("register/loginUserAsync", async (user: ILogin) => {
    try {
        const res = await axios.post(`https://frail-frog-leather-jacket.cyclic.app/auth/login`, user);
        return await res.data;

    } catch (error) {
        throw new Error("Beklenmedik bir hata olustu!")
    }
})

export const getAllUserAsync = createAsyncThunk("register/getAllUserAsync", async () => {
    const res = await axios.get(`https://frail-frog-leather-jacket.cyclic.app/auth`);
    return await res.data;
})