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
  let dec = 0;

  const charArray: string[] = s.split("");

  while (s.length > 0) {
    const sym1: string = s[0];
    // const sym1num = +Guide[sym1];
    const sym1num: Guide = (Guide as any)[sym1];
    s = s.substring(1);

    if (s.length > 0) {
      const sym2: string = s[0];
      const sym2num: Guide = (Guide as any)[sym2];

      // E.g. "IV"
      if (order.indexOf(sym1) > order.indexOf(sym2)) {
        s = s.substring(1);
        dec += sym2num - sym1num;
      } else {
        dec += sym1num;
      }
    } else {
      dec += sym1num;
    }
  }

  return dec;
};
