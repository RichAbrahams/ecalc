import formatNumber from './formatNumber';

export const normalizeArray = (input) => {
  const output = input.map(item => normalize(item));
  return output;
}

export const normalize = (input) => {
  const output = Object.assign({}, {...input});
  for (const key in output) {
    if (typeof output[key] === "number") {
      output[key] = formatNumber(output[key], 1);
    }
  }
  return output;
}
