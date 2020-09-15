import { formatedValue } from "../utils/formatedValue";

function sumValues(charcters: string, mult: Array<number>): number {
  const sumValues = charcters
    .split("")
    .map((item) => {
      const value = parseInt(item);

      return value;
    })
    .reduce((prev, current) => {
      if (current >= 10) {
        const numOne = parseInt(current.toString().substr(0, 1));
        const numTwo = parseInt(current.toString().substr(1, 1));

        const value = numOne + numTwo;
        console.log(value);
        return prev + value;
      }
      console.log(current);

      return prev + current;
    }, 0);

  return sumValues;
}

class ValidateBilletCodeService {
  public execute(code: string) {
    if (code.length !== 47) {
      throw new Error("Billet code invalid!");
    }

    const fieldOne = sumValues(code.substr(0, 9), [2, 1, 2, 1, 2, 1, 2, 1, 2]);

    console.log(fieldOne);

    const dvFieldOne = code.substr(9, 1);
    const fieldTwo = code.substr(10, 10);
    const dvFieldTwo = code.substr(20, 1);
    const fieldTree = code.substr(21, 10);
    const dvFieldTree = code.substr(31, 1);

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
