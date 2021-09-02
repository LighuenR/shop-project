const express = require("express");
const router = express.Router();

const productController = require("../controllers/productsControllers");

router.route("/")
    .get(productController.getProducts)
    .post(productController.addProduct)


module.exports = router;
