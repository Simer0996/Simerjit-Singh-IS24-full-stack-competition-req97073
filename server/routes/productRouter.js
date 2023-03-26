const router = require('express').Router();

const {
    postProduct,
    getProducts,
    getProductById,
    editProduct,
    deleteProduct
} = require('../controller/productController.js');

router.get('/', getProducts);
router.post('/', postProduct);
router.get('/:id', getProductById);
router.patch('/:id', editProduct);
router.delete('/:id', deleteProduct);


module.exports = router;
