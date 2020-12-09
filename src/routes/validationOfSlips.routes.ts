import { Router } from "express";

import ValidationOfSlipsController from "../controllers/ValidationOfSlipsController";

const validationOfSlipsController = new ValidationOfSlipsController();

const validationOfSlipsRouter = Router();

validationOfSlipsRouter.get("/:barCode", validationOfSlipsController.create);

export default validationOfSlipsRouter;
