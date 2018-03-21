import calcBaseToAdd from './calcBaseToAdd';
import mlToGrams from './mlToGrams';
import mlToDrops from './mlToDrops';
import mlToPercent from './mlToPercent';

const calcNicotineBase = (baseStrength, targetStrength, nicotineBaseLiquid, batchSize) => {
  const ml = calcBaseToAdd(baseStrength, targetStrength, batchSize);
  const g = mlToGrams(ml, nicotineBaseLiquid);
  const drops = mlToDrops(ml);
  const percentage = mlToPercent(ml, batchSize);
  return {
    ml,
    g,
    drops,
    percentage,
    baseStrength,
    base: nicotineBaseLiquid,
    name: `Nicotine Base ${baseStrength}mg/mL`
  }
};

export default calcNicotineBase;