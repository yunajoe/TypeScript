const targetScore = {
  inner: 1,
  middle: 5,
  outer: 10,
  outside: 0,
} as const;

type TargetScore = (typeof targetScore)[keyof typeof targetScore];

export function score(x: number, y: number): TargetScore {
  const innerCirlcle = 1;
  const middleCircle = 25;
  const outerCircle = 100;
  const calculatedPoint = x ** 2 + y ** 2;
  if (calculatedPoint > outerCircle) {
    return 0;
  } else if (calculatedPoint > middleCircle && calculatedPoint <= outerCircle) {
    return 1;
  } else if (
    calculatedPoint > innerCirlcle &&
    calculatedPoint <= middleCircle
  ) {
    return 5;
  }
  return 10;
}
