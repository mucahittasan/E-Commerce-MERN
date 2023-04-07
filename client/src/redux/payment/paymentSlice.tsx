import { createSlice } from '@reduxjs/toolkit'
import { IPaymentCardType, IPaymentUserType } from '../../@types/PaymentTypes'
import { addPaymentToOrdersAsync } from './service'

type allInfos = {
    name: string
    lastName: string,
    email: string,
    address: string
    cardNumber: string,
    cardOwnerName: string,
    expirationDateMonth: string,
    expirationDateYear: string,
    cvv: string
}

export type ContactState = {
    paymentUserInfo: IPaymentUserType | null,
    paymentCardInfo: IPaymentCardType | null,
    allInfos: allInfos | null,
    isLoading: boolean,
    error: null | string | undefined,
}

const initialState: ContactState = {
    paymentUserInfo: null,
    paymentCardInfo: null,
    allInfos: null,
    isLoading: false,
    error: null
}


export const paymentSlice = createSlice({
    name: "payment",
    initialState,
    reducers: {
        addUserInfo: (state, action) => {
            state.paymentUserInfo = action.payload
        },
        addCardInfo: (state, action) => {
            state.paymentCardInfo = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(addPaymentToOrdersAsync.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(addPaymentToOrdersAsync.fulfilled, (state, action) => {
                state.isLoading = false;
            })
            .addCase(addPaymentToOrdersAsync.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message
            })
    }
})

export const { addUserInfo, addCardInfo } = paymentSlice.actions

export default paymentSlice.reducer