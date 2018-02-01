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
  console.log('pgminmax', formatNumber(pgContent, 2), formatNumber(vgContent, 2));
  return [pgContent, vgContent];
};


export default pgMinMax;