export const guide: Object = {
  "M": 1000,
  "D": 500,
  "C": 100,
  "L": 50,
  "X": 10,
  "V": 5,
  "I": 1
};


export const order: Array<string> = ["M", "D", "C", "L", "X", "V", "I"];


export const roman2decimal = (s: String): number => {
  s = s.toUpperCase();
  var dec = 0;
  while (s.length > 0) {
    var sym1 = s[0];

    s = s.substring(1);

    if (s.length > 0) {
      var sym2 = s[0];

      // E.g. "IV"
      if (order.indexOf(sym1) > order.indexOf(sym2)) {
        s = s.substring(1);
        dec += guide[sym2] - guide[sym1];
      }
      else {
        dec += guide[sym1];
      }
    }
    else {
      dec += guide[sym1];
    }
  }

  return dec
}
