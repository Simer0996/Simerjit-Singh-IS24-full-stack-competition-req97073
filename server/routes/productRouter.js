const router = require('express').Router();

const {
    postProduct,
    getProducts,
    getProductById,
    editProduct,
    deleteProduct
} = require('../controller/productController.js');

router.get('/products', getProducts);
router.post('/products', postProduct);
router.get('/products/:id', getProductById);
router.patch('/products/:id', editProduct);
router.delete('/products/:id', deleteProduct);


module.exports = router;
