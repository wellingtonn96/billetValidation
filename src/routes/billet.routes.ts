import { Router } from "express";

import BilletController from "../controllers/BilletController";

const billetController = new BilletController();

const billetRouter = Router();

billetRouter.post("/", billetController.create);

export default billetRouter;
