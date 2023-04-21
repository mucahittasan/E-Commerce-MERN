import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { ILogin, IRegister } from '../../@types/UserType';

// REGISTER
export const registerUserAsync = createAsyncThunk("register/registerUserAsync", async (user: IRegister) => {
    const res = await axios.post(`https://e-commerce-g1b7.onrender.com/auth/register`, user);
    return await res.data;
})

// LOGIN
export const loginUserAsync = createAsyncThunk("register/loginUserAsync", async (user: ILogin) => {
    try {
        const res = await axios.post(`https://e-commerce-g1b7.onrender.com/auth/login`, user);
        return await res.data;

    } catch (error) {
        throw new Error("Beklenmedik bir hata olustu!")
    }
})

export const getAllUserAsync = createAsyncThunk("register/getAllUserAsync", async () => {
    const res = await axios.get(`https://e-commerce-g1b7.onrender.com/auth`);
    return await res.data;
})