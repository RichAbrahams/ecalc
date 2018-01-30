

const baseToAdd = (baseStrength, targetStrength, batchSize) => {
  return (targetStrength / baseStrength) * batchSize;
}

export default baseToAdd;