import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { IContactType } from '../../@types/ContactType';

// ADD PERSON TO CONTACT
export const addPersonToContactAsync = createAsyncThunk("contact/addPersonToContactAsync", async (person: IContactType) => {
    const res = await axios.post(`https://frail-frog-leather-jacket.cyclic.app/contact`, person);
    return await res.data;
})
