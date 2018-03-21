import mlToGrams from "./mlToGrams";
import mlToDrops from "./mlToDrops";
import percentToMl from "./percentToMl";

const calcFlavours = (flavours, batchSize) => {
  const output = flavours.map(flav => {
    const { name, percentage, base } = flav;
    const ml = percentToMl(percentage, batchSize);
    const g = mlToGrams(ml, base);
    const drops = mlToDrops(ml);
    return {
      name: `Flavor: ${name}`,
      g,
      ml,
      drops,
      percentage,
      base,
    };
  });
  return output;
};

export default calcFlavours;