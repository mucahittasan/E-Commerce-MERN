import { Router } from "express";
import Favorite from "../model/Favorite.js";
import User from "../model/User.js";

const router = Router();

// ADD TO Favorite
router.post("/:id", async (req, res) => {
    const user = await User.findById(req.params.id)
    try {
        user.favorites.push(req.body)

        const saveUser = await user.save();
        res.status(200).json(saveUser);
    } catch (error) {
        res.status(500).send(error)
    }
})

// GET ALL Favorite
router.get("/:userId", async (req, res) => {
    try {
        const allPayment = await User.findById(req.params.userId);
        const favorites = allPayment.favorites

        res.status(200).json(favorites);
    } catch (error) {
        res.status(500).send(error)
    }
})


// DELETE Favorite ITEM BY ID
router.delete("/:userId/:itemId", async (req, res) => {
    try {
        const userId = req.params.userId;
        const itemId = req.params.itemId;

        await User.findByIdAndUpdate(
            userId,
            { $pull: { favorites: { _id: itemId } } },
            { new: true }
        );

        res.status(200).json("Item is deleted");
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
})


export default router;