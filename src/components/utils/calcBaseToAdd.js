

const baseToAdd = (baseStrength, targetStrength, batchSize) => {
  const result = targetStrength > 0 ? (targetStrength / baseStrength) * batchSize : 0;
  return result;
}

export default baseToAdd;