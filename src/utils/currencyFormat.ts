export const currencyFormat = (value: number) => {
  return new Intl.NumberFormat("en-DO", {
    style: "currency",
    currency: "DOP",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
};
