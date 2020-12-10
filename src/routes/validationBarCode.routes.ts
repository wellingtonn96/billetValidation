import { Router } from "express";

import ValidationBarCodeController from "../controllers/ValidationBarCodeController";

const validationBarCodeController = new ValidationBarCodeController();

const validationBarCodeRoutes = Router();

validationBarCodeRoutes.get("/:barCode", validationBarCodeController.create);

export default validationBarCodeRoutes;
