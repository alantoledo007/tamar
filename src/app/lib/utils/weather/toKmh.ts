export const mtsToKmh = (mts: number) =>
  parseFloat(((mts * 60 * 60) / 1000).toFixed(2));
