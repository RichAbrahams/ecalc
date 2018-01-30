import mlToGrams from "./mlToGrams";
import mlToDrops from "./mlToDrops";
import percentToMl from "./percentToMl";

const calcPG = (pgVgRatio, batchSize, nicotineBaseResult, flavoursResult) => {
  let requiredVG = 100 - pgVgRatio;
  if (nicotineBaseResult.base === "VG") {
    requiredVG -= nicotineBaseResult.percentage;
  }
  const flavourVGContent = flavoursResult.reduce((VGcontent, flavour) => {
    if (flavour.base === "VG") {
      return (VGcontent += flavour.percentage);
    } else {
      return VGcontent;
    }
  }, 0);
  requiredVG -= flavourVGContent;
  const ml = percentToMl(requiredVG, batchSize);
  const g = mlToGrams(ml, 'VG');
  const drops = mlToDrops(ml);
  return {
    g,
    ml,
    drops,
    percentage: requiredVG,
    name: `VG`
  }
};

export default calcPG;