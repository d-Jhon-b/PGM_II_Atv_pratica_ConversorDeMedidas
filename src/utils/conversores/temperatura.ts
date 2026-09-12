export const celsiusParaFahrenheit = (celsius: number): number => {
  return (celsius * 9) / 5 + 32;
};

export const fahrenheitParaCelsius = (fahrenheit: number): number => {
  return ((fahrenheit - 32) * 5) / 9;
};