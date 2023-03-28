const mockdata = require('../db/mockData')

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


const getProducts = async (req, res, next) => {
    try {
        const data = await mockdata
        res.status(200).json(data)
    } catch (error) {
        next(error)
    }
}

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

const editProduct = async (req, res, next) => {
    try {
        const product = mockdata.find(p => p.id === (req.params.id))
        if (product) {
            product.productName = req.body.productName
            product.productOwnerName = req.body.productOwnerName
            product.Developers = req.body.Developers
            product.scrumMasterName = req.body.scrumMasterName
            product.startDate = req.body.startDate
            product.methodology = req.body.methodology
            res.status(200).json(product)
        } else {
            res.status(404).json({ message: 'Product not found' })
        }
    } catch (error) {
        next(error)
    }
}

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