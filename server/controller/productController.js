const mockdata = require('../db/mockData')

//Route function when a user wants to add a new product
const postProduct = async (req, res, next) => {
    try {
        const product = req.body
        const data = await mockdata
        data.push(product)
        res.status(201).json(data)
    } catch (error) {
        next(error)
    }
}

//Route function when a user wants to get all products
const getProducts = async (req, res, next) => {
    try {
        const data = await mockdata
        res.status(200).json(data)
    } catch (error) {
        next(error)
    }
}

//Route function when a user wants to get a specific product
const getProductById = async (req, res, next) => {
    try {
        const product = mockdata.find(p => p.id === (req.params.id))
        if (product) {
            res.status(200).json(product)
        } else {
            res.status(404).json({ message: 'Product not found' })
        }
    } catch (error) {
        next(error)
    }
}

//Route function when a user wants to edit a specific product
const editProduct = async (req, res, next) => {
    try {
        const product = mockdata.find(p => p.id === (req.params.id))
        if (product) {
            product.productName = req.body.productName
            product.productOwnerName = req.body.productOwnerName
            product.developers = req.body.developers
            product.scrumMasterName = req.body.scrumMasterName
            product.methodology = req.body.methodology
            res.status(200).json(product)
        } else {
            res.status(404).json({ message: 'Product not found' })
        }
    } catch (error) {
        next(error)
    }
}

//Route function when a user wants to delete a specific product
const deleteProduct = async (req, res, next) => {
    try {
        const product = mockdata.find(p => p.id === (req.params.id))
        if (product) {
            const index = mockdata.indexOf(product)
            mockdata.splice(index, 1)
            res.status(200).json({ message: 'Product deleted' })
        } else {
            res.status(404).json({ message: 'Product not found' })
        }
    } catch (error) {
        next(error)
    }
}



module.exports = {
    postProduct,
    getProducts,
    getProductById,
    editProduct,
    deleteProduct
}