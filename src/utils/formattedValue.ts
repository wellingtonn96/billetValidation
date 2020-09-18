export const formattedValue = (value: string): string => {
  const firstEightNumbers = value.toString().substr(0, value.length - 2);

  const decimal = value.substr(value.length - 2);

  const valueWithDot = `${firstEightNumbers}.${decimal}`;
  const formatedValue = new Intl.NumberFormat("pt-br", {
    style: "currency",
    currency: "BRL",
  }).format(parseFloat(valueWithDot));

  return formatedValue;
};
