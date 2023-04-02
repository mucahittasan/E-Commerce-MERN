import { configureStore } from '@reduxjs/toolkit'
import productReducer from './products/productSlice';
import basketReducer from './basket/basketSlice';
import favorteReducer from './favorite/favorteSlice';
import searchReducer from './search/searchSlice';

export const store = configureStore({
    reducer: {
        product: productReducer,
        basket: basketReducer,
        favorite: favorteReducer,
        search: searchReducer
    },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch