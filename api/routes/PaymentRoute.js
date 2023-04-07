import { Router } from "express";
import Payment from "../model/Payment.js";

const router = Router();

// ADD TO Payment
router.post("/", async (req, res) => {
    const newPayment = await new Payment(req.body);
    try {
        const savedPayment = await newPayment.save();
        res.status(200).json(savedPayment);
    } catch (error) {
        res.status(500).send(error)
    }
})

// GET ALL PAYMENT
router.get("/", async (req, res) => {
    try {
        const allPayment = await Payment.find();
        res.status(200).json(allPayment);
    } catch (error) {
        res.status(500).send(error)
    }
})


export default router;