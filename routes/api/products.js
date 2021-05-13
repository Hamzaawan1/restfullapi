const express = require("express");
let router = express.Router();
//const validateHouse = require("../../middlewares/validateProduct");

var Product = require("../../models/products");

//get houses
router.get("/", async(req, res) => {
    let products = await Product.find();
    console.log(products);
    return res.send(products);
});
//get a single houses
router.get("/:id", async(req, res) => {
    try {
        let products = await Product.findById(req.params.id);
        if (!products)
            return res
                .status(400)
                .send("Product With Given Id Not Found In Database");
        return res.send(products);
    } catch (err) {
        return res.status(400).send("Invalid Id");
    }
});

//update a house details
router.put("/:id", async(req, res) => {
    let products = await Product.findById(req.params.id);
    products.Product_name = req.body.Product_name;
    products.Price = req.body.Price;

    await products.save();
    return res.send(products);
});

//To detele a Record
router.delete("/:id", async(req, res) => {
    let products = await Product.findByIdAndDelete(req.params.id);
    return res.send(products);
});

//To add a New Record
router.post("/", async(req, res) => {
    let products = new Product();
    products.Product_name = req.body.Product_name;
    products.Price = req.body.Price;

    await products.save();
    return res.send(products);
});
module.exports = router;