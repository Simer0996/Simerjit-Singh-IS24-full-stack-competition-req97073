const router = require('express').Router();

const {
    postProduct,
    getProducts,
    getProductById,
    editProduct,
    deleteProduct
} = require('../controller/productController.js');

//Route function when a user wants to get all products initiated with Swagger for documentation 
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

//Route function when a user wants to add a product initiated with Swagger for documentation 
/**
 * @openapi
 * /api/products:
 *   post:
 *       summary: Add a new product
 *       description: Add a new product
 *       requestBody:
 *          required: true
 *          content:
 *             application/json:
 *                  schema:
 *                     $ref: '#/components/schemas/Product'
 *       responses:
 *         201:
 *          description: Created
 */

router.post('/', postProduct);

//Route function when a user wants to get a specific product initiated with Swagger for documentation 
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

//Route function when a user wants to edit a specific product initiated with Swagger for documentation 
/**
 * @openapi
 * /api/products/{id}}:
 *   patch:
 *       summary: Add a new product
 *       description: Add a new product
 *       parameters:
 *         - name: id
 *           in: path
 *           required: true
 *           description: The id of the product
 *       requestBody:
 *          required: true
 *          content:
 *             application/json:
 *                  schema:
 *                     $ref: '#/components/schemas/Product'
 *       responses:
 *         200:
 *          description: updated 
 */
router.patch('/:id', editProduct);


//Route function when a user wants to delete a specific product initiated with Swagger for documentation 
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
