import { Router } from "express";
import ValidateBilletCodeService from "../services/ValidateBilletCodeService";

const billetRouter = Router();

billetRouter.post("/", (request, response) => {
  try {
    const { code } = request.body;

    const validateBillet = new ValidateBilletCodeService();

    const billet = validateBillet.execute(code);

    return response.json(billet);
  } catch (err) {
    return response.status(400).json({ erro: err.message });
  }
});

export default billetRouter;
