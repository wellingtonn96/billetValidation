import { ValidateBarCodeRepository } from "../repositories/ValidateBarCodeRepository";


class ValidationBarCodeService {
  public execute(barCode: string) {
    const validateBarCodeRepository = new ValidateBarCodeRepository();

    const validateCode = validateBarCodeRepository.validateBarCodeFields(barCode);

    if (!validateCode) {
      throw new Error("bar code is invalid!");
    }

    const amount = validateBarCodeRepository.getAmmoutValue(barCode);

    const expirationDate = validateBarCodeRepository.getExpirationDate(barCode);

    return {
      barCode,
      amount,
      expirationDate,
    };
  }
}

export default ValidationBarCodeService;
