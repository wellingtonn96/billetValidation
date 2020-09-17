import { Request, Response } from "express";
import ValidateBilletCodeService from "../services/ValidateBilletCodeService";

class BilletController {
  public create(request: Request, response: Response) {
    try {
      const { code } = request.body;

      const validateBillet = new ValidateBilletCodeService();

      const billet = validateBillet.execute(code);

      return response.json(billet);
    } catch (err) {
      return response.status(400).json({ erro: err.message });
    }
  }
}

export default BilletController;
