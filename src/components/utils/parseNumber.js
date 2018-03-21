const parseNumber = (number) => {
  let num = number = "" ? "0" : number;
  return parseFloat(num);
}

export default parseNumber;