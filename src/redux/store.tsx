import { configureStore } from '@reduxjs/toolkit'
import productReducer from './products/productSlice';
import basketReducer from './basket/basketSlice';
import favorteReducer from './favorite/favorteSlice';

export const store = configureStore({
    reducer: {
        product: productReducer,
        basket: basketReducer,
        favorite: favorteReducer
    },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch