export const formattedValue = (value: string): string => {
  const formatedValue = new Intl.NumberFormat("pt-br", {
    style: "currency",
    currency: "BRL",
  }).format(parseFloat(value));

  return formatedValue;
};
