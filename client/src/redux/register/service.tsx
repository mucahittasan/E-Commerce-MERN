import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { IRegister } from '../../@types/UserType';

// Wait for it :)
const wait = (ms: number) =>
    new Promise<void>((resolve) => {
        setTimeout(() => resolve(), ms);
    });

// GET ALL PRODUCTS
export const registerUserAsync = createAsyncThunk("register/registerUserAsync", async (user: IRegister) => {
    const res = await axios.post(`https://e-commerce-g1b7.onrender.com/register`, user);
    return await res.data;
})