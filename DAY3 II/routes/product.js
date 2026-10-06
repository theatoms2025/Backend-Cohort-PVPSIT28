const express = require("express");
const c = require("../controllers/productController")
const router = express.Router();


router.get("", c.getProducts);

router.get("/:id", c.getProduct)

router.post("", c.createProduct);

router.put("/:id", c.updateProduct);

router.delete("/:id", c.deleteProduct) 

module.exports = router;