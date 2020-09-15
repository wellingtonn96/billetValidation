import { Router } from "express";

const routes = Router();

import billetRouter from "./billet.routes";

routes.use("/billet", billetRouter);

export default routes;
