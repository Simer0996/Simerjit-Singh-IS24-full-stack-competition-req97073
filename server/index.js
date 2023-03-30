//Initialize the server with express 
const express = require("express")
//Initialize dotenv to use environment variables although it is not used in this project, but is a good practice 
//to store all the credentials in a .env file and use them as environment variables
const dotenv = require("dotenv")

//Initialize cors to allow cross origin requests
const cors = require("cors")

//Custom middleware to handle errors
const errorHandler = require("./middleware/error.js")

//Initialize body-parser to parse the body of the request
const bodyParser = require("body-parser")

//Initialize swagger to document the API
const swaggerDocs = require("./swagger.js")

//Initialize the router for the products
const productRouter = require("./routes/productRouter.js")

//Initialize the server
const app = express()

//Initialize dotenv
dotenv.config()

//Initialize body-parser to parse the body of the request 
app.use(bodyParser.json())

//Initialize express to serve static files 
app.use(express.static("public"))

//Initialize cors to allow cross origin requests
app.options("*", cors())

//Cors middleware
app.use(cors())

//Initialize express to parse the body of the request in json format
app.use(express.json())

//primary route for the products
app.use("/api/products", productRouter)

//Error handler middleware
app.use(errorHandler)

//Initialize the port to listen to
const port = process.env.PORT || 8000

//Start the server
const start = async () => {
    try {
        app.listen(port, () => {
            console.log(`Server is listening on port ${port}...`)
            swaggerDocs(app, port)
        })
    } catch (error) {
        console.log(error)
    }
}

start()