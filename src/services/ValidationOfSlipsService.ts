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

  if (sumValues % 10 === 0 && dv === 0) return true;

  return (sumValues % 10) + dv === 10 ? true : false;
}

function getDueDate(numDays: number) {
  const newdate = new Date(1997, 10, 7);

  newdate.setDate(newdate.getDate() + numDays);

  let dd = newdate.getDate();
  let mm = newdate.getMonth();
  let y = newdate.getFullYear();

  if (mm === 0) {
    mm = 12;
    y = y - 1;
  }

  return `${
    dd < 10 ? `0${dd}`.substring(0, 2) : dd.toString().substring(0, 2)
  }/${mm < 10 ? `0${mm}`.substring(0, 2) : mm.toString().substring(0, 2)}/${y}`;
}

class ValidationOfSlipsService {
  public execute(code: string) {
    const dvFieldOne = parseInt(code.substr(9, 1));
    const validateFieldOne = validateField(code.substr(0, 9), 2, dvFieldOne);

    if (!validateFieldOne) {
      const dv = parseInt(code.substr(3, 1));
      const validate = code.substr(0, 44).replace(dv.toString(), "");
      const validateCode = validateField(validate, 2, dv);

      if (validateCode) {
        const removeDig = code.substr(11, 1);
        const value = code.substr(4, 12).replace(removeDig, "");
        const formatValue = formattedValue(value);
        return {
          value: formatValue,
          code: code.substr(0, 44),
        };
      }

      throw new Error("Code is invalid!");
    }

    const dvFieldTwo = parseInt(code.substr(20, 1));
    const validateFieldTwo = validateField(code.substr(10, 10), 1, dvFieldTwo);

    if (!validateFieldTwo) {
      throw new Error("Code is invalid!");
    }

    const dvFieldTree = parseInt(code.substr(31, 1));
    const validateFieldThree = validateField(
      code.substr(21, 10),
      1,
      dvFieldTree
    );

    if (!validateFieldThree) {
      throw new Error("Code is invalid!");
    }

    const value = code.substr(code.length - 10);
    const formatValue = formattedValue(value);

    const days = parseInt(code.substr(33, 4));
    const dueDate = getDueDate(days);

    return {
      dueDate,
      value: formatValue,
      code,
    };
  }
}

export default ValidationOfSlipsService;
