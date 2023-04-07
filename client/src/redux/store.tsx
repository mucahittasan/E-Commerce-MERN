import { configureStore } from '@reduxjs/toolkit'
// Slices
import productReducer from './products/productSlice';
import basketReducer from './basket/basketSlice';
import favorteReducer from './favorite/favorteSlice';
import searchReducer from './search/searchSlice';
import contactReducer from './contact/contactSlice';
import paymentReducer from './payment/paymentSlice';

export const store = configureStore({
    reducer: {
        product: productReducer,
        basket: basketReducer,
        favorite: favorteReducer,
        search: searchReducer,
        contact: contactReducer,
        payment: paymentReducer
    },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch