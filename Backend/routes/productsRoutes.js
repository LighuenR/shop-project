const express = require("express");
const router = express.Router();

const productControler = require("../controllers/productsControllers");

router.route("/")
    .get(productControler.getProducts)
    .post(productControler.addProduct)


module.exports = router;
