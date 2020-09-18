import { Router } from "express";

const routes = Router();

import ValidationOfSlipsRouter from "./validationOfSlips.routes";

routes.use("/billet", ValidationOfSlipsRouter);

export default routes;
