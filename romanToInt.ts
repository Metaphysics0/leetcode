function romanToInt(s: string) {
  const romanMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  const edgeCases = {
    IV: 4,
    IX: 9,
    XL: 40,
    XC: 90,
    CD: 400,
    CM: 900,
  };

  let total = 0;

  for (let i = 0; i <= s.length; i++) {
    let currentChar = s[i];
    let nextChar = s[i + 1];
    const isSingleRoman = romanMap.hasOwnProperty(currentChar);
    const isSpecialRoman = edgeCases.hasOwnProperty(currentChar + nextChar);

    if (isSpecialRoman) {
      total += edgeCases[currentChar + nextChar];
      i += 1;
    } else if (isSingleRoman) {
      total += romanMap[currentChar];
    }
  }
  return total;
}

const v = romanToInt("MCMXCIV");
console.log("V", v);
