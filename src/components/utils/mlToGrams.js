const toGrams = (ml, baseLiquid) => {
  const multiplier = baseLiquid === "PG" ? 1 : 1.2;
  return ml * multiplier;
}

export default toGrams;