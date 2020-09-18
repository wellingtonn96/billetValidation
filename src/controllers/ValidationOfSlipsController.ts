import { Request, Response } from "express";
import ValidationOfSlipsService from "../services/ValidationOfSlipsService";

class ValidationOfSlipsController {
  public create(request: Request, response: Response) {
    try {
      const { code } = request.body;

      const validateBillet = new ValidationOfSlipsService();

      const billet = validateBillet.execute(code);

      return response.json(billet);
    } catch (err) {
      return response.status(400).json({ erro: err.message });
    }
  }
}

export default ValidationOfSlipsController;
