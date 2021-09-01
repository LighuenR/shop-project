const express = require("express");
const router = express.Router();

const productControler = require("../controllers/productsControllers");

router.route("/")
    .get(productControler.getProducts);
/*     .post(productControler); */


module.exports = router;
