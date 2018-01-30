import baseToAdd from "../../../utils/calcBaseToAdd";
import mlToPercent from '../../../utils/mlToPercent';
import formatNumber from '../../../utils/formatNumber';

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
  const pgMin = formatNumber(pgContent, 0);
  const pgMax = formatNumber(100 - vgContent, 0);
  return [formatNumber(pgContent, 0), formatNumber(vgContent, 0)];
};


export default pgMinMax;