import { Router } from "express";
import User from "../model/User.js";

const router = Router();

// ADD TO BASKET
router.post("/:id", async (req, res) => {
    const user = await User.findById(req.params.id)
    try {
        user.basket.push(req.body)

        const saveUser = await user.save();
        res.status(200).json(saveUser);
    } catch (error) {
        res.status(500).send(error)
    }
})

// GET ALL BASKET
router.get("/:id", async (req, res) => {
    try {
        const user = await User.findById(req.params.id)

        const basketItems = user.basket;
        res.status(200).json(basketItems);
    } catch (error) {
        res.status(500).send(error)
    }
})

// DELETE BASKET ITEM BY ID
router.delete("/:userId/:itemId", async (req, res) => {
    try {
        const userId = req.params.userId;
        const itemId = req.params.itemId;

        await User.findByIdAndUpdate(
            userId,
            { $pull: { basket: { _id: itemId } } },
            { new: true }
        );

        res.status(200).json("Item is deleted");
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
})

// DELETE BASKET 
router.delete("/:userId", async (req, res) => {
    try {
        const result = await User.updateMany(
            { _id: req.params.userId },
            { $unset: { basket: [] } }
        );

        res.status(200).json("All items is deleted!");


    } catch (error) {
        res.status(500).send(error)
    }
})

// UPDATE BASKET ITEM COUNT BY ID
router.put("/:id", async (req, res) => {
    try {
        const result = await User.updateOne(
            { _id: req.params.id, "basket.id": req.body.id },
            { $set: { "basket.$.count": req.body.count } }
        );

        res.status(200).send(result);


    } catch (error) {
        res.status(500).send(error)
    }
})




export default router;