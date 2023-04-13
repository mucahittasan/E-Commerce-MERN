import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    userName: {
        type: String,
        require: true,
        unique: true,
    },
    email: {
        type: String,
        require: true,
        unique: true,
    },
    password: {
        type: String,
        require: true,
        min: 8,
    },
    basket: {
        type: Array,
        require: false,
        default: []
    },
    favorites: {
        type: Array,
        require: false,
        default: []
    },
    orders: {
        type: Array,
        require: false,
        default: []
    }
}, { timestamps: true });


export default mongoose.model("User", UserSchema);