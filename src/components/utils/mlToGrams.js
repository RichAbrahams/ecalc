const toGrams = (ml, baseLiquid) => {
  const multiplier = baseLiquid === "PG" ? 0.965 : 1.261;
  return ml * multiplier;
}

export default toGrams;