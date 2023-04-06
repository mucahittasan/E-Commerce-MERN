import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { IContactType } from '../../@types/ContactType';

// ADD PERSON TO CONTACT
export const addPersonToContactAsync = createAsyncThunk("contact/addPersonToContactAsync", async (person: IContactType) => {
    const res = await axios.post(`https://typesciprt-e-commerce-api.vercel.app/contact`, person);
    return await res.data;
})
