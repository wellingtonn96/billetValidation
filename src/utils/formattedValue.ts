export const formattedValue = (value: string): string => {
  const firstEightNumbers = value.toString().substr(0, value.length - 2);

  const decimal = value.substr(value.length - 2);

  const valueWithDot = `${firstEightNumbers}.${decimal}`;
  const formatedValue = parseFloat(valueWithDot).toString();

  return formatedValue;
};
