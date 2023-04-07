import mongoose from "mongoose";

const PaymentSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    lastName: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    address: {
        type: String,
        require: true
    },
    cardNumber: {
        type: String,
        require: true
    },
    cardOwnerName: {
        type: String,
        require: true
    },
    expirationDateMonth: {
        type: String,
        require: true
    },
    expirationDateYear: {
        type: String,
        require: true
    },
    cvv: {
        type: String,
        require: true
    }

}, { timestamps: true })


export default mongoose.model("Payment", PaymentSchema);