const router = require('express').Router();

const {
    postProduct,
    getProducts,
    getProductById,
    editProduct,
    deleteProduct
} = require('../controller/productController.js');

/**
 * @openapi
 * /api/products:
 *   get:
 *     tags:
 *       - products
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array 
 *                   items: 
 *                     type: object
 */

router.get('/', getProducts);

/**
 * @openapi
 * /api/products:
 *   post:
 *     tags:
 *       - products
 *     requestBody:
 *       required: true
 *       contents:
 *        application/json:
 *         schema:
 *           ref: '#/components/schemas/Product'

 */

router.post('/', postProduct);
/**
 * @openapi
 * /api/products/{id}:
 *   get:
 *     tags:
 *       - product
 *     parameters:
 *      - name: id
 *        in: path
 *        required: true
 *        description: The id of the product
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   properties:
 *                    id:
 *                     type: string
 *                    productName:
 *                     type: string
 *                    productOwnerName:
 *                     type: string
 *                    Developers:
 *                     type: array
 *                    scrumMasterName:
 *                     type: string
 *                    startDate:
 *                     type: string
 *                    methodology:
 *                     type: string
 *                   items: 
 *                     type: object
 */
router.get('/:id', getProductById);

/**
 * @openapi
 * /api/products/{id}}:
 *   patch:
 *     tags:
 *       - products
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array 
 *                   items: 
 *                     type: object
 */

router.patch('/:id', editProduct);

/**
 * @openapi
 * /api/products/{id}:
 *   delete:
 *     tags:
 *       - products
 *     parameters:
 *      - name: id
 *        in: path
 *        required: true
 *        description: The id of the product
 *     responses:
 *       200:
 *         description: OK
 */
router.delete('/:id', deleteProduct);


module.exports = router;
