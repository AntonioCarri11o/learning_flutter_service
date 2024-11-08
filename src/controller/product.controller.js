import { pool } from "../db.js"

export const getProducts = async(req, res) => {
    const [result] = await pool.query('SELECT * FROM product');
    return res.json(result);
}

export const getById = async(req, res) => {
    const [result] = await pool.query('SELECT * from product WHERE id_product = ?', [req.params.id]);
    return res.json(result);
}

export const createProduct = async(req, res) => {
    const {name, price, stock} = req.body;
    await pool.query('INSERT INTO product (name, price, stock) VALUES(?, ?, ?)',[name, price, stock]);
    return res.send('Datos insertados');
}

export const uptadeProduct = async(req, res) => {
    const {id, name, price, stock} = req.body;
    await pool.query('UPDATE product SET name = ?, price = ?, stock = ? WHERE id_product = ?', [name, price, stock, id]);
    res.send('Datos actualizados');
}

export const deleteProduct = async(req, res) => {
    const id = req.params.id;
    await pool.query('DELETE FROM product WHERE id_product = ?', [id]);
    return res.send('Producto eliminado');
}