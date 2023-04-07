import { Router } from "express";
import Favorite from "../model/Favorite.js";

const router = Router();

// ADD TO Favorite
router.post("/", async (req, res) => {
    const newFavoriteItem = await new Favorite(req.body);
    try {
        const savedFavoriteItem = await newFavoriteItem.save();
        res.status(200).json(savedFavoriteItem);
    } catch (error) {
        res.status(500).send(error)
    }
})

// GET ALL Favorite
router.get("/", async (req, res) => {
    try {
        const favoriteItems = await Favorite.find();
        res.status(200).json(favoriteItems);
    } catch (error) {
        res.status(500).send(error)
    }
})

// DELETE Favorite ITEM BY ID
router.delete("/:id", async (req, res) => {
    try {
        const item = await Favorite.findByIdAndDelete(req.params.id)

        res.status(200).json("Item is deleted!");

    } catch (error) {
        res.status(500).send(error)
    }
})


export default router;