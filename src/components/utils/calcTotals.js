const totals = (nicotineBaseResult, flavoursResult, pgResult, vgResult) => {
  const flavorsTotals = flavoursResult.reduce((container, flav) => {
    container.ml += flav.ml;
    container.g += flav.g;
    container.drops += flav.drops;
    container.percentage += flav.percentage;
    return container;
  }, {
    ml: 0,
    g:0,
    percentage: 0,
    drops: 0
  });
  const g = nicotineBaseResult.g + flavorsTotals.g + pgResult.g + vgResult.g;
  const drops = nicotineBaseResult.drops + flavorsTotals.drops + pgResult.drops + vgResult.drops;
  const percentage = nicotineBaseResult.percentage + flavorsTotals.percentage + pgResult.percentage + vgResult.percentage;
  const ml = nicotineBaseResult.ml + flavorsTotals.ml + pgResult.ml + vgResult.ml;
  return {
    g,
    drops,
    percentage,
    ml,
    name: `Totals`
  };
}

export default totals;