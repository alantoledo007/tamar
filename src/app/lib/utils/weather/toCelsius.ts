export const fahrenheitToCelsius = (fahrenheit: number) =>
  Math.round((5 / 9) * (fahrenheit - 32));

export const kelvinToCelsius = (kelvin: number) => Math.round(kelvin - 273.15);
