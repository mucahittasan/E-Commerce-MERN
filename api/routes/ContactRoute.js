import { Router } from "express";
import Contact from "../model/Contact.js";

const router = Router();

// ADD TO Contact
router.post("/", async (req, res) => {
    const newContactItem = await new Contact(req.body);
    try {
        const savedContactItem = await newContactItem.save();
        res.status(200).json(savedContactItem);
    } catch (error) {
        res.status(500).send(error)
    }
})

router.get("/", async (req, res) => {
    try {
        const allContact = await Contact.find();
        res.status(200).json(allContact);
    } catch (error) {
        res.status(500).send(error)
    }
})


export default router;