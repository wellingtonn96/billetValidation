import { Router } from "express";

import ValidationOfSlipsController from "../controllers/ValidationOfSlipsController";

const validationOfSlipsController = new ValidationOfSlipsController();

const validationOfSlipsRouter = Router();

validationOfSlipsRouter.post("/", validationOfSlipsController.create);

export default validationOfSlipsRouter;
