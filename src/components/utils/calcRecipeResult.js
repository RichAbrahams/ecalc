import calcNicotineBase from "./calcNicotineBase";
import calcFlavours from "./calcFlavours";
import calcPG from "./calcPG";
import calcVG from "./calcVG";
import calcTotals from './calcTotals'
import { normalize, normalizeArray } from './normalize';

const finalResults = ({
  baseStrength,
  batchSize,
  flavours = [],
  nicotineBaseLiquid,
  pgVgRatio,
  targetStrength
}) => {
  const nicotineBaseResult = calcNicotineBase(
    baseStrength,
    targetStrength,
    nicotineBaseLiquid,
    batchSize
  );
  const flavoursResult = calcFlavours(flavours, batchSize);
  const pgResult = calcPG(pgVgRatio, batchSize, nicotineBaseResult, flavoursResult);
  const vgResult = calcVG(pgVgRatio, batchSize, nicotineBaseResult, flavoursResult);
  const totalsResult = calcTotals(nicotineBaseResult, flavoursResult, pgResult, vgResult);

  return {
    nicotineBase: normalize(nicotineBaseResult),
    pg: normalize(pgResult),
    vg: normalize(vgResult),
    flavors: normalizeArray(flavoursResult),
    totals: normalize(totalsResult)
  };
};

export default finalResults;