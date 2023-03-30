// This middleware is used to handle errors that occur in the application
const errorHandler = (err, req, res, next) => {
    res.status(500).json({ message: err.message })
}

module.exports = errorHandler