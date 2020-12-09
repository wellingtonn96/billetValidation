import { Router } from "express";

const routes = Router();

import ValidationOfSlipsRouter from "./validationOfSlips.routes";

routes.use("/boleto", ValidationOfSlipsRouter);

export default routes;
