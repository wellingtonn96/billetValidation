import { formattedValue } from "../utils/formattedValue";

function validateField(
  charcters: string,
  initialMult: 2 | 1,
  dv: number
): boolean {
  const sumValues = charcters
    .split("")
    .map((item) => {
      const value = parseInt(item);
      const multValue = value * initialMult;
      initialMult === 2 ? (initialMult = 1) : (initialMult = 2);
      return multValue;
    })
    .reduce((prev, current) => {
      if (current >= 10) {
        const numOne = parseInt(current.toString().substr(0, 1));
        const numTwo = parseInt(current.toString().substr(1, 1));

        const value = numOne + numTwo;

        return prev + value;
      }

      return prev + current;
    }, 0);

  console.log(sumValues);

  console.log((sumValues % 10) + dv);

  return (sumValues % 10) + dv === 10 ? true : false;
}

function getDateWithNumberOfTheDays(numDays: number) {
  const newdate = new Date(1997, 10, 7);

  newdate.setDate(newdate.getDate() + numDays);

  let dd = newdate.getDate();
  let mm = newdate.getMonth();
  let y = newdate.getFullYear();

  if (mm === 0) {
    mm = 12;
    y = y - 1;
  }

  return `${dd}/${mm}/${y}`;
}

class ValidateBilletCodeService {
  public execute(code: string) {
    if (code.length !== 47) {
      throw new Error("Billet code invalid!");
    }

    const dvFieldOne = parseInt(code.substr(9, 1));
    const validateFieldOne = validateField(code.substr(0, 9), 2, dvFieldOne);

    if (!validateFieldOne) {
      throw new Error("Billet code invalid!");
    }

    const dvFieldTwo = parseInt(code.substr(20, 1));
    const validateFieldTwo = validateField(code.substr(10, 10), 1, dvFieldTwo);

    if (!validateFieldTwo) {
      throw new Error("Billet code invalid!");
    }

    const dvFieldTree = parseInt(code.substr(31, 1));
    const validateFieldTree = validateField(
      code.substr(21, 10),
      1,
      dvFieldTree
    );

    if (!validateFieldTree) {
      throw new Error("Billet code invalid!");
    }

    const value = code.substr(code.length - 10);

    const firstEightNumbers = value.toString().substr(0, 8);

    const decimal = code.substr(code.length - 2);

    const valueWithDot = `${firstEightNumbers}.${decimal}`;

    const formatValue = formattedValue(valueWithDot);

    const days = parseInt(code.substr(33, 4));

    const dueDate = getDateWithNumberOfTheDays(days);

    return {
      dueDate,
      value: formatValue,
      code,
    };
  }
}

export default ValidateBilletCodeService;
