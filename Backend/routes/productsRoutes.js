const express = require("express");
const router = express.Router();

const productController = require("../controllers/productsControllers");

router.route("/")
    .get(productController.getProducts)
    .post(productController.addProduct)
    .put(productController.putProduct)

router.route('/:_id')  
    .get(productController.getProducts)
    .delete(productController.deleteProduct)
    
    /* .put(productController.putTask) */


module.exports = router;
