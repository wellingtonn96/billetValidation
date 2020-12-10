import { Router } from "express";

const routes = Router();

import validationBarCodeRouter from "./validationBarCode.routes";

routes.use("/boleto", validationBarCodeRouter);

export default routes;
