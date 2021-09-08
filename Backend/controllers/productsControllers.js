const ProductModel = require("../models/productsModels");

const getProducts = async(req, res, next) => {
    const products = await ProductModel.find();
    res.status(200).json(products)
}

const addProduct = async(req, res, next) => {
    const newProduct = await new ProductModel(req.body)
    try {
        const product = await newProduct.save()
        res.status(201).json(product)
    } catch (error) {
        next(error)
    }
}

const deleteProduct = async (req, res, next) => {
    const productId = req.params;
    try {
        await ProductModel.findByIdAndRemove(productId);
        res.status(200).json({ success: true });
        
    } catch(error) {
        error.status = 400;
        next(error);
    }
};
const putProduct = async (req, res, next) => {
    const productId = req.body._id;
    const newProduct = req.body;
    try {
        await ProductModel.findByIdAndUpdate(productId, newProduct);
        res.status(200).json({ success: true });
        
    } catch(error) {
        error.status = 400;
        next(error);
    }
};
const getProductById = async(req, res, next) => {
    const productId = req.body._id
    try {
        await Product.findById(taskId);
        res.status(200).json({ success: true });
    } catch(error) {
        error.status = 400;
        next(error)
    }
}

module.exports = {
    getProducts,
    addProduct,
    deleteProduct,
    putProduct,
    getProductById
}