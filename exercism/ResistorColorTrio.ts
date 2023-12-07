// my solution

enum Colors {
  black,
  brown,
  red,
  orange,
  yellow,
  green,
  blue,
  violet,
  grey,
  white,
}

type Color = keyof typeof Colors;
function calculateResult(result: number) {
  if (result < 1000) {
    return result + " ohms";
  } else if (result >= 1000 && result < 1000000) {
    return result / 1000 + " kiloohms";
  } else if (result >= 1000000 && result < 1000000000) {
    return result / 1000000 + " megaohms";
  }
  return result / 1000000000 + " gigaohms";
}

function decodedResistorValue(strArr: Color[]) {
  const [color1, color2, color3] = strArr;
  const result = (Colors[color1] * 10 + Colors[color2]) * 10 ** Colors[color3];
  return calculateResult(result);
}

// other solution
/*
enum Colors {
  black,
  brown,
  red,
  orange,
  yellow,
  green,
  blue,
  violet,
  grey,
  white,
}
type Color = keyof typeof Colors;
const Units = ["ohms", "kiloohms", "megaohms", "gigaohms"];

type Unit = (typeof Units)[number];
interface calResulrInterFace {
  result: number;
  unit: Unit;
}

function calResult(result: number): calResulrInterFace {
  let unit = "ohms";
  for (let i = 1; i <= 3 && result >= 1000; i++) {
    result = result / 1000;
    unit = Units[i];
  }
  return { result, unit };
}

function decodedResistorValue([color1, color2, color3]: Color[]) {
  const value = (Colors[color1] * 10 + Colors[color2]) * 10 ** Colors[color3];
  const { result, unit } = calResult(value);
  return `${result} ${unit}`;
}

*/
