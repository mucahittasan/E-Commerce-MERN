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
        default: [],
        id: {
            type: Number,
            require: true,
            unique: true
        },
        title: {
            type: String,
            require: true
        },
        description: {
            type: String,
            require: true
        },
        price: {
            type: Number,
            require: true
        },
        loading: {
            type: Boolean,
            require: false
        },
        category: {
            type: String,
            require: false
        },
        type_of_product: {
            type: String,
            require: false
        },
        count: {
            type: Number,
            require: true
        },
        gender: {
            type: String,
            require: false
        },
        main_image: {
            type: String,
            require: false
        },
        images: [
            {
                subImage: {
                    type: String,
                    require: false
                }
            }
        ]
    },
    favorites: {
        type: Array,
        require: false,
        default: [],
        id: {
            type: Number,
            require: true,
            unique: true
        },
        title: {
            type: String,
            require: true
        },
        description: {
            type: String,
            require: true
        },
        price: {
            type: Number,
            require: true
        },
        loading: {
            type: Boolean,
            require: false
        },
        category: {
            type: String,
            require: false
        },
        type_of_product: {
            type: String,
            require: false
        },
        count: {
            type: Number,
            require: true
        },
        gender: {
            type: String,
            require: false
        },
        main_image: {
            type: String,
            require: false
        },
        images: [
            {
                subImage: {
                    type: String,
                    require: false
                }
            }
        ]
    },
    orders: {
        type: Array,
        require: false,
        default: [],
    }
}, { timestamps: true });


export default mongoose.model("User", UserSchema);