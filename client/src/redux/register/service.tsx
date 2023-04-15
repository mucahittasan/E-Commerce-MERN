import axios, { AxiosError } from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { ILogin, IRegister } from '../../@types/UserType';

// Wait for it :)
const wait = (ms: number) =>
    new Promise<void>((resolve) => {
        setTimeout(() => resolve(), ms);
    });

// REGISTER
export const registerUserAsync = createAsyncThunk("register/registerUserAsync", async (user: IRegister) => {
    const res = await axios.post(`http://localhost:5000/auth/register`, user);
    return await res.data;
})

// LOGIN
export const loginUserAsync = createAsyncThunk("register/loginUserAsync", async (user: ILogin) => {
    try {
        const res = await axios.post(`http://localhost:5000/auth/login`, user);
        return await res.data;
    } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
            if (error.response) {
                const errorMessage = await error.response.data;
                console.log(errorMessage)
                throw new Error(errorMessage);
            } else if (error.request) {
                console.error(error.request);
                throw new Error('Network error');
            } else {
                console.error(error.message);
                throw new Error('Request error');
            }
        } else {
            console.error(error);
            throw new Error('Unknown error occurred');
        }
    }
})

export const getAllUserAsync = createAsyncThunk("register/getAllUserAsync", async () => {
    const res = await axios.get(`http://localhost:5000/auth`);
    return await res.data;
})