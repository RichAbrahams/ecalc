import mlToGrams from "./mlToGrams";
import mlToDrops from "./mlToDrops";
import percentToMl from "./percentToMl";

const calcPG = (pgVgRatio, batchSize, nicotineBaseResult, flavoursResult) => {
  let requiredPG = pgVgRatio;
  if (nicotineBaseResult.base === "PG") {
    requiredPG -= nicotineBaseResult.percentage;
  }
  const flavourPGContent = flavoursResult.reduce((PGcontent, flavour) => {
    if (flavour.base === "PG") {
      return (PGcontent += flavour.percentage);
    } else {
      return PGcontent;
    }
  }, 0);
  requiredPG -= flavourPGContent;
  const ml = percentToMl(requiredPG, batchSize);
  const g = mlToGrams(ml, 'PG');
  const drops = mlToDrops(ml);
  return {
    g,
    ml,
    drops,
    percentage: requiredPG,
    name: 'PG'
  }
};

export default calcPG;