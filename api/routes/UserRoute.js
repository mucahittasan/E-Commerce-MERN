import { Router } from "express";
import User from "../model/User.js";

const router = Router();

// ADD User to register
router.post("/", async (req, res) => {
    const newUser = await new User(req.body);
    try {
        const savedNewUser = await newUser.save();
        res.status(200).json(savedNewUser);
    } catch (error) {
        res.status(500).send(error)
    }
})

router.get("/", async (req, res) => {
    try {
        const allUser = await User.find();
        res.status(200).json(allUser);
    } catch (error) {
        res.status(500).send(error)
    }
})


export default router;