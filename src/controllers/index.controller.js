import { pool } from "../db.js";

export const ping = async (req, res) => {
    const resultado = await pool.query("SELECT 1 + 1 AS solution");
    res.send(resultado[0]); 
  }