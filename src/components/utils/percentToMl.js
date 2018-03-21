const percentToMl = (ml, batchSize) => {
  return ((batchSize / 100) * ml);
}

export default percentToMl;