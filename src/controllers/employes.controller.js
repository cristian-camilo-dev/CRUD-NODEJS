import { pool } from "../db.js";

export const getEmployes = async (req, res) => {
  try {
    const get = await pool.query("SELECT * FROM employes");
    res.send(get[0]);
  } catch (err) {
    res.status(500).send(err);
  }
};

export const getEmploye = async (req, res) => {
  try {
    const { id } = req.params;
    const get = await pool.query("SELECT * FROM employes WHERE id = ?", [id]);
    if (get[0].length > 0) {
      res.send(get[0]);
    } else {
      res.status(404).send("No se encontró el empleado");
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

export const createEmployes = async (req, res) => {
  try {
    const { name, salary } = req.body;
    const [rows] = await pool.query(
      "INSERT INTO employes (name, salary) VALUES (?, ?)",
      [name, salary]
    );
    res.send({ id: rows.insertId, name, salary });
  } catch (err) {
    res.status(500).send(err);
  }
};

export const updateEmployes = async (req, res) => {
 try{
  const { id } = req.params;
  const { name, salary } = req.body;
  const result = await pool.query(
    "UPDATE employes SET name =IFNULL(?,name), salary =IFNULL(?,salary) WHERE id = ?",
    [name, salary, id]
  );
  if (result.affectedRows === 0) {
    res.status(404).send("No se encontró el empleado");
  }

  res.send({ id, name, salary });
 }
  catch(err){
    res.status(500).send(err);
  }

};

export const deleteEmployes = async (req, res) => {
  try {
  const { id } = req.params;
  const deleteEmploye = await pool.query("DELETE FROM employes WHERE id = ?", [
    id,
  ]);

  if (deleteEmploye[0].affectedRows > 0) {
    res.send(`Empleado con id ${id} eliminado`);
  } else {
    res.status(404).send("No se encontró el empleado");
  }
  } 
  catch (error) {
    res.status(500).send(error);
  }
};
