const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Product API',
            version: '1.0.0',
            description: 'A simple Express Product API',
        },
    },
    apis: ['./routes/productRouter.js', './db/mockData.js'],
};

const swaggerSpec = swaggerJsdoc(options);

const swaggerDocs = (app, port) => {
    app.use("/api/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec))
    app.get('/api/api-docs.json', (req, res) => {
        res.setHeader('Content-Type', 'application/json');
        res.send(swaggerSpec);
    })
    console.log("Swagger docs available at http://localhost:" + port + "/api/api-docs")
};

module.exports = swaggerDocs;
