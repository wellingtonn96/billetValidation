import { Router } from "express";

const routes = Router();

import ValidationOfSlipsRouter from "./validationOfSlips.routes";

routes.use("/validateSlip", ValidationOfSlipsRouter);

export default routes;
