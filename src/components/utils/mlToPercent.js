const toPercent = (ml, batchSize) => {
  return (100 / batchSize) * ml;
}

export default toPercent;