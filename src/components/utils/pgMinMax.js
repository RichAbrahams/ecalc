import baseToAdd from './calcBaseToAdd';
import mlToPercent from './mlToPercent';

const pgMinMax = (
  targetStrength,
  baseStrength,
  nicotineBaseLiquid,
  flavours,
  batchSize
) => {
  let pgContent = 0;
  let vgContent = 0;
  const baseML = baseToAdd(baseStrength, targetStrength, batchSize);
  const basePercent = mlToPercent(baseML, batchSize);
  if (nicotineBaseLiquid === "PG") {
    pgContent += basePercent;
  } else {
    vgContent += basePercent;
  }
  if (flavours) {
    flavours.forEach(flavour => {
      if (flavour.base === "PG") {
        pgContent += flavour.percentage;
      } else {
        vgContent += flavour.percentage;
      }
    });
  }
  return [pgContent, vgContent];
};


export default pgMinMax;