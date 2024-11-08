import express, { json } from 'express';
import productRoutes from './routes/product.routes.js';
import { PORT } from './config.js';
import './config.js';
const app = express();

app.use(express.json());
app.use(productRoutes);

app.listen(PORT);
console.log( `Service running in port: ${PORT}`);

