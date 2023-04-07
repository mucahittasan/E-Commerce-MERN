import { Router } from "express";
import Basket from "../model/Basket.js";

const router = Router();

// ADD TO BASKET
router.post("/", async (req, res) => {
    const newBasketItem = await new Basket(req.body);
    try {
        const savedBasketItem = await newBasketItem.save();
        res.status(200).json(savedBasketItem);
    } catch (error) {
        res.status(500).send(error)
    }
})

// GET ALL BASKET
router.get("/", async (req, res) => {
    try {
        const basketItems = await Basket.find();
        res.status(200).json(basketItems);
    } catch (error) {
        res.status(500).send(error)
    }
})

// DELETE BASKET ITEM BY ID
router.delete("/:id", async (req, res) => {
    try {
        const item = await Basket.findByIdAndDelete(req.params.id)

        res.status(200).json("Item is deleted!");


    } catch (error) {
        res.status(500).send(error)
    }
})

// DELETE BASKET 
router.delete("/", async (req, res) => {
    try {
        await Basket.deleteMany();
        res.status(200).json("All items is deleted!");


    } catch (error) {
        res.status(500).send(error)
    }
})

// UPDATE BASKET ITEM COUNT BY ID
router.put("/:id", async (req, res) => {
    try {
        const item = await Basket.findById(req.params.id)

        const count = req.body.count

        const result = await item.updateOne(
            { $set: { count: count } }
        );

        res.status(200).send(result);


    } catch (error) {
        res.status(500).send(error)
    }
})




export default router;