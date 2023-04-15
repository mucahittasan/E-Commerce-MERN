import { Router } from "express";
import User from "../model/User.js";

const router = Router();

// ADD TO Payment
router.post("/:userId", async (req, res) => {
    const user = await User.findById(req.params.userId)

    try {
        user.orders.push(req.body)

        const saveUser = await user.save();
        res.status(200).json(saveUser);
    } catch (error) {
        res.status(500).send(error)
    }
})

// GET ALL PAYMENT
router.get("/:userId", async (req, res) => {
    try {
        const allPayment = await User.findById(req.params.id);
        const orders = allPayment.orders

        res.status(200).json(orders);
    } catch (error) {
        res.status(500).send(error)
    }
})


export default router;