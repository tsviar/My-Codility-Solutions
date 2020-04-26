/*
Write a function solution that, given an integer N, 
returns the maximum possible value obtained by inserting one '5'
digit inside the decimal representation of integer N.
Examples: 
1. Given N 268, the function should return 5268. 
2. Given N 670, the function should return 6750. 
3. Given N 0, the function should return 50. 
4. Given N -999, the function should return -5999. 

Assume that: N is an integer within the range [-8,000.8,000]
*/

const FindMaxWhenAddedDigit = (N, inDigit) => {
  const INSERT_ONLY = 0;
  let foundFirstIdx = 0;

  let digits = [];

  digits = ("" + Math.abs(N)).split("");

  // for positive nums find the 1st index of the smalest and insert at that index
  if (N >= 0) {
    console.log("start POS digits ", digits);

    foundFirstIdx = digits.findIndex(d => d <= "" + inDigit);
    console.log(`smalest than  inDigit  ${foundFirstIdx} `);
  }

  // for negative nums find the biggest and insert before
  else {
    console.log("start NEG digits ", digits);

    foundFirstIdx = digits.findIndex(d => d > "" + inDigit);

    console.log(digits);
    console.log(`+digits[1]  ${+digits[1]} `);
  }

  if (foundFirstIdx < 0) {
    digits.push(inDigit);
  } else {
    digits.splice(foundFirstIdx, INSERT_ONLY, "" + inDigit);
  }

  digits = (N < 0 ? -1 : 1) * Number(digits.join(""));

  return digits;
};

var res = 0;
// res = FindMaxWhenAddedDigit(2, 5);
// res = FindMaxWhenAddedDigit(0, 5);
// res = FindMaxWhenAddedDigit(6, 5);

//  res = FindMaxWhenAddedDigit(12, 5);
//  res = FindMaxWhenAddedDigit(52, 5);
//  res = FindMaxWhenAddedDigit(58, 5);
//  res = FindMaxWhenAddedDigit(98, 5);

// res = FindMaxWhenAddedDigit(128, 5);
// res = FindMaxWhenAddedDigit(528, 5);
// res = FindMaxWhenAddedDigit(158, 5);
// res = FindMaxWhenAddedDigit(918, 5);

//  res = FindMaxWhenAddedDigit(554, 5);
//  res = FindMaxWhenAddedDigit(814, 5);
// res = FindMaxWhenAddedDigit(268, 5);
//  res = FindMaxWhenAddedDigit(8000, 5);
// res = FindMaxWhenAddedDigit(111, 5);

// res = FindMaxWhenAddedDigit(-2, 5);
// res = FindMaxWhenAddedDigit(0, 5);
// res = FindMaxWhenAddedDigit(-6, 5);

// res = FindMaxWhenAddedDigit(-128, 5);
// res = FindMaxWhenAddedDigit(-528, 5);
// res = FindMaxWhenAddedDigit(-158, 5);
// res = FindMaxWhenAddedDigit(-918, 5);
// res = FindMaxWhenAddedDigit(-381, 5);

//  res = FindMaxWhenAddedDigit(-111, 5);
// res = FindMaxWhenAddedDigit(-125, 5);
// res = FindMaxWhenAddedDigit(-8000, 5);
//  res = FindMaxWhenAddedDigit(-999, 5);
// res = FindMaxWhenAddedDigit(-153, 5);

console.log(`sres  ${res} `);

//=================================
