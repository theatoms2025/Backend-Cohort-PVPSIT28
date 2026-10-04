const express = require("express");
const router = express.Router();

let products = [
    {
        id: 1, 
        name: "Laptop",
        price: 50000
    },
    {
        id: 2,
        name: "Mobile",
        price: 20000
    },
    {
        id: 3,
        name: "Charger",
        price: 250
    }
];

router.get("", (req, res) => {
    res.send(products);
});

router.get("/:id", (req, res) => {
    const id = req.params.id;

    const product = products.find((p) => p.id === Number(id));

    if (!product) {
        return res.status(404).json({
            message: "Product not found"
        });
    }

    res.status(200).json({
        name: product.name,
        price: product.price
    });
})

router.post("", (req, res) => {
    const {name, price} = req.body;

    if (!name) {
        return res.status(400).json({
            message: "Name not found"
        })
    }

    if (!price) {
        return res.status(400).json({
            message: "price not found"
        })
    }

    const product = {id: Date.now(), name, price};
    products.push(product);

    console.log(products)
    return res.status(201).json(product);
});

router.put("/:id", (req, res) => {
    const id = req.params.id;

    const product = products.find((p) => p.id === Number(id));
    if (!product) {
        return res.status(404).json({
            message: "Product not found"
        });
    }

    product.name = req.body.name ?? product.name;
    product.price = req.body.price ?? product.price;

    res.status(200).json(product);
});

router.delete("/:id", (req, res) => {
    const id = req.params.id;
    products = products.filter((p) => p.id != Number(id));

    res.status(200).json({
        message: "Product deleted successfully"
    })
})

module.exports = router;