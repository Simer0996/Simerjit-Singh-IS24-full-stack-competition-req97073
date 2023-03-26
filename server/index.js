const express = require("express")
const dotenv = require("dotenv")
const cors = require("cors")
const errorHandler = require("./middleware/error.js")
const bodyParser = require("body-parser")

const productRouter = require("./routes/productRouter.js")
const app = express()

dotenv.config()
app.use(bodyParser.json({ limit: "10mb" }))
app.use(express.static("public"))
app.options("*", cors())
app.use(cors())
app.use(express.json())

app.use("/api/v1/products", productRouter)
app.use(errorHandler)

const port = process.env.PORT || 8000

const start = async () => {
    try {
        app.listen(port, () => {
            console.log(`Server is listening on port ${port}...`)
        })
    } catch (error) {
        console.log(error)
    }
}

start()