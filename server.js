import app from "./app.js";

import PORT from './src/config/server.config.js';

//-----------database-----------
import './src/config/db.config.js';



//----------routes-----------
import movieRoute from "./src/routes/movie.route.js";
movieRoute(app);

import swaggerJsDoc from'swagger-jsdoc';
import swaggerUi from'swagger-ui-express';



// -------------Swagger Configuration-------------------
const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0', 
    info: {
      title: 'User CRUD API',
      version: '1.0.0',
      description: 'Simple Movie CRUD API for managing users',
    },
    servers: [
      {
        url: 'http://localhost:6500',
      },
    ],
  },
  apis: ['./server.js'], // Path to the API docs
};

// Generate Swagger Documentation
const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

/**
 * @swagger
 * /api/v1/allmovie:
 *   get:
 *     summary: Get all Movie
 *     responses:
 *       200:
 *         description: List of users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   name:
 *                     type: string
 *                   
 */
/**
 * @swagger
 * /api/v1/addmovie:
 *   post:
 *     summary: Create a new Movie
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               
 *     responses:
 *       201:
 *         description: User created
 */




app.listen(PORT.PORT,()=>console.log(`App running on ${PORT.PORT}`))