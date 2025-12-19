// Write a JavaScript program that accepts a number as input and inserts dashes (-) between each even number. For example if you accept 025468 the output should be .

function dashed(val) {
  let res = [];

  for (let i = 0; i < val.length - 1; i++) {
    res.push(val[i]);
    if (val[i] % 2 !== 0) continue;
    else {
      res.push("-");
    }
  }
  res.push(Number(val[val.length - 1]));
  return res.join("");
}

console.log(dashed("025468"));
