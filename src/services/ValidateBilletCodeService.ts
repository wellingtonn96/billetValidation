import { formatedValue } from "../utils/formatedValue";

class ValidateBilletCodeService {
  public execute(code: string) {
    if (code.length !== 47) {
      throw new Error("Billet code invalid!");
    }

    const value = code.substr(code.length - 10);

    const firstEightNumbers = value.toString().substr(0, 8);

    const decimal = code.substr(code.length - 2);

    const valueWithDot = firstEightNumbers + "." + decimal;

    const formatValue = formatedValue(valueWithDot);

    return {
      value: formatValue,
      code,
    };
  }
}

export default ValidateBilletCodeService;
