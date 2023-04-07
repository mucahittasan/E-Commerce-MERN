export interface IPaymentUserType {
    name: string
    lastName: string,
    email: string,
    address: string
}

export interface IPaymentCardType {
    cardNumber: string,
    cardOwnerName: string,
    expirationDateMonth: string,
    expirationDateYear: string,
    cvv: string
}