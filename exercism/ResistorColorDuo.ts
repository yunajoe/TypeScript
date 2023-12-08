const COLORS = {
  black: 0,
  brown: 1,
  red: 2,
  orange: 3,
  yellow: 4,
  green: 5,
  blue: 6,
  violet: 7,
  grey: 8,
  white: 9,
};

type Color = keyof typeof COLORS;

export function decodedValue(colorArry: Color[]) {
  return Number(
    colorArry
      .map((item, index) => {
        if (index > 1) {
          return;
        }
        return COLORS[item];
      })
      .join("")
  );
}

/*
sol2
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
    `white`]  as const

type Color =   typeof ColorArray[number]

function decodedValue([color1, color2]: Color[]):number{
    return ColorArray.indexOf(color1) * 10  + ColorArray.indexOf(color2)

}

*/

/*
sol3) 

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

function decodedValue([color1, color2]: Color[]):number{
    return Number(`${ColorEnum[color1]}${ColorEnum[color2]}`)

}


*/
