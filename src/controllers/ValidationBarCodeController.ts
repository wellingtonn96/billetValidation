import { Request, Response } from "express";
import ValidationBarCodeService from "../services/ValidationBarCodeService";

class ValidationBarCodeController {
  public create(request: Request, response: Response) {
    try {
      const { barCode } = request.params;

      const validateBarCode = new ValidationBarCodeService();

      const validation = validateBarCode.execute(barCode);

      return response.json(validation);
    } catch (err) {
      return response.status(400).json({ erro: err.message });
    }
  }
}

export default ValidationBarCodeController;
