import { Router } from "express";
import { createProduct, deleteProduct, getById, getProducts, uptadeProduct } from "../controller/product.controller.js";
const router = Router();

router.get('/product', getProducts);
router.get('/product/:id', getById);
router.post('/product', createProduct);
router.put('/product', uptadeProduct);
router.delete('/product/:id', deleteProduct);
export default router;