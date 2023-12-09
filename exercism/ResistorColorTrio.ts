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

// sol2)
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

// sol3)
/*    
enum ColorEnum {
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

type Color = keyof typeof ColorEnum   

const units = ["ohms", "kiloohms", "megaohms", "gigaohms"]

function calValue(value:number){
    let unit =0;
    while(value>=1000){
      value = value/1000
      unit +=1 
    }
    return{
        value: value,
        unit: unit
    }
}
function decodedResistorValue([color1, color2, color3]:Color[]) {
    let result = (ColorEnum[color1] * 10 + ColorEnum[color2]) * (10 ** ColorEnum[color3])
    const {value, unit} = calValue(result)   
    return `${value} ${units[unit]}`  
 
}   

*/

// sol4)
/*    
const ColorArray =
  [`black`,
    `brown`,
    `red`,
    `orange`,
    `yellow`,
    `green`,
    `blue`,
    `violet`,
    `grey`,
    `white`,] as const 

type Color = typeof ColorArray[number]

const ohmns = [[1000000000, "giga"], [1000000, "mega"], [1000, "kilo"]] as const

 function decodedResistorValue([color1, color2, color3]: Color[])  {
  let result = (ColorArray.indexOf(color1) * 10  + ColorArray.indexOf(color2)) * (10 ** ColorArray.indexOf(color3))
  const [nums, unit] = ohmns.find(([value, unit])=> result >= value) ?? [1, "ohmns"]
  return `${result/nums} ${unit}`  
}  
*/
