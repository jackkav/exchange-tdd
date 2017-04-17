export const guide: object = {
  M: 1000,
  D: 500,
  C: 100,
  L: 50,
  X: 10,
  V: 5,
  I: 1,
};

export enum Guide {
  M = 1000,
  D = 500,
  C = 100,
  L = 50,
  X = 10,
  V = 5,
  I = 1,
}

export const order: string[] = ["M", "D", "C", "L", "X", "V", "I"];

export const decimal2roman = (num: number): string => {
  const digits = String(+num).split("");
  const key = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM",
    "", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC",
    "", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
  let roman = "";
  let i = 3;
  while (i--) {
    roman = (key[+digits.pop() + (i * 10)] || "") + roman;
  }
  return new Array(+digits.join("") + 1).join("M") + roman;
};

export const roman2decimal = (s: string): number => {
  if (!s) { return 0; }
  s = s.toUpperCase();
  let total = 0;
  const charArray: string[] = s.split("");

  while (charArray.length > 0) {
    const top: string = charArray.shift();
    const next: string = charArray[0];
    const isNextLower: boolean = order.indexOf(top) <= order.indexOf(next);
    const isLastElement: boolean = charArray.length === 0;
    if (isLastElement || isNextLower) {
      total += (Guide as any)[top];
    } else {
      charArray.shift();
      total += (Guide as any)[next] - (Guide as any)[top];
    }
  }

  return total;
};
