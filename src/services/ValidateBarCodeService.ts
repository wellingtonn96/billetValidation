import { ValidateBarCodeRepository } from "../repositories/ValidateBarCodeRepository";


class ValidateBarCodeService {
  public execute(barCode: string) {
    const validateBarCodeRepository = new ValidateBarCodeRepository();

    const validateBankBondsBarCode = validateBarCodeRepository.validateBankBondsBarCode(barCode);

    if (!validateBankBondsBarCode) {
      const validateDealershipPaymentsBarCode = validateBarCodeRepository.validateDealershipPaymentsBarCode(barCode)

      if(!validateDealershipPaymentsBarCode) {
        throw new Error("bar code is invalid!");
      }

      return {
        barCode
      }
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

export default ValidateBarCodeService;
