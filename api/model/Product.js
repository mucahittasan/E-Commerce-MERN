import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
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
}, { timestamps: true })


export default mongoose.model("Product", ProductSchema);