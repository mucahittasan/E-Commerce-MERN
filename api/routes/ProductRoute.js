import { Router } from "express";
import Product from "../model/Product.js";

const router = Router();

// GET ALL PRODUCT
router.get("/", async (req, res) => {
    try {
        const productItems = await Product.find();
        res.status(200).json(productItems);
    } catch (error) {
        res.status(500).send(error)
    }
})

// FIND BY ID PRODUCT
router.get("/:id", async (req, res) => {
    try {
        const currentProduct = await Product.findById(req.params.id);

        res.status(200).json(currentProduct);
    } catch (error) {
        res.status(500).send(error)
    }

})

export default router;