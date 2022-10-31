import { Router } from "express";
import {
  getEmployes,
  getEmploye,
  createEmployes,
  updateEmployes,
  deleteEmployes,
} from "../controllers/employes.controller.js";

const router = Router();

router.get("/empleados", getEmployes);

router.get("/empleados/:id", getEmploye);

router.post("/empleados", createEmployes);

router.patch("/empleados/:id", updateEmployes);

router.delete("/empleados/:id", deleteEmployes);

export default router;
