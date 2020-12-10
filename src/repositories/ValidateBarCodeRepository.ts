import { formattedValue } from "../utils/formattedValue";

class ValidateBarCodeRepository {
  public getExpirationDate(barCode: string) {
    const numDays = parseInt(barCode.substr(33, 4));
    
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
    }-${mm < 10 ? `0${mm}`.substring(0, 2) : mm.toString().substring(0, 2)}-${y}`;
  }

  public validateOneFieldBarCode(
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

  public validateBarCodeFields(barCode: string): boolean {
    const dvFieldOne = parseInt(barCode.substr(9, 1));
    const validateFieldOne = this.validateOneFieldBarCode(barCode.substr(0, 9), 2, dvFieldOne);

    if (!validateFieldOne) {
     return validateFieldOne;
    }

    const dvFieldTwo = parseInt(barCode.substr(20, 1));
    const validateFieldTwo = this.validateOneFieldBarCode(barCode.substr(10, 10), 1, dvFieldTwo);

    if (!validateFieldTwo) {
     return validateFieldTwo;
    }

    const dvFieldTree = parseInt(barCode.substr(31, 1));
    const validateFieldThree = this.validateOneFieldBarCode(
      barCode.substr(21, 10),
      1,
      dvFieldTree
    );

    if (!validateFieldThree) {
     return validateFieldThree;
    }

    return true;
  }

  public getAmmoutValue(barCode: string) {
    const value = barCode.substr(barCode.length - 10);
    const formatValue = formattedValue(value);

    return formatValue;
  }
}

export { ValidateBarCodeRepository }


// const dv = parseInt(barCode.substr(3, 1));
// const validate = barCode.substr(0, 44).replace(dv.toString(), "");
// const validateCode = validateField(validate, 2, dv);

// if (validateCode) {
//   const removeDig = barCode.substr(11, 1);
//   const value = barCode.substr(4, 12).replace(removeDig, "");
//   const formatValue = formattedValue(value);
//   return {
//     value: formatValue,
//     barCode: barCode.substr(0, 44),
//   };
// }