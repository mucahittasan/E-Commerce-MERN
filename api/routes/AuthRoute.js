import { Router } from "express";
import User from "../model/User.js";
import bcrypt from 'bcrypt'

const router = Router();

// REGISTER
router.post("/register", async (req, res) => {
    try {

        const { userName, email, password, basket, favorites, orders } = req.body;
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = await new User({
            userName,
            email,
            password: hashedPassword,
            basket,
            favorites,
            orders
        });

        const userEmail = await User.findOne({ email: req.body.email });
        const userUsername = await User.findOne({ userName: req.body.userName });

        if (userEmail) {
            res.status(400).send("This email is already have!");
        } else if (userUsername) {
            res.status(400).send("This username is already have!");
        } else {
            const savedNewUser = await newUser.save();
            res.status(200).json(savedNewUser);
        }


    } catch (error) {
        res.status(500).send(error)
    }
})

// LOGIN
router.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });

        const validPassword = await bcrypt.compare(
            req.body.password,
            user.password
        )

        if (!validPassword || !user) {
            res.status(404).send("Geçersiz şifre veya e-posta!");
        } else {
            res.status(200).json(user);
        }

    } catch (error) {
        res.status(500).json(error)
    }
});

router.get("/", async (req, res) => {
    try {
        const allUser = await User.find();
        res.status(200).json(allUser);
    } catch (error) {
        res.status(500).send(error)
    }
})


export default router;