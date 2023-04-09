import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import morgan from "morgan";
import cors from 'cors'

import basketRoute from './routes/BasketRoute.js'
import productRoute from './routes/ProductRoute.js'
import favoriteRoute from './routes/FavoriteRoute.js'
import contactRoute from './routes/ContactRoute.js'
import paymentRoute from './routes/PaymentRoute.js'

const app = express();
dotenv.config()

const port = process.env.PORT;

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGOOSE)
        console.log("Connected to mongoDB");
    } catch (error) {
        console.log(error);
    }
}

// midleware
app.use(express.json());
app.use(morgan("common"))
app.use(cors({
    origin: ['https://e-commerce-app-alpha-brown.vercel.app', "http://localhost:3000"]
}));

app.use("/basket", basketRoute)
app.use("/products", productRoute)
app.use("/favorites", favoriteRoute)
app.use("/contact", contactRoute)
app.use("/payment", paymentRoute)

app.listen(port, () => {
    connect();
    console.log(`Server is running on port: ${port}`)
})
