// Write a JavaScript function that accepts a string as a parameter and finds the longest word within the string.

// Example string : 'Web Development Tutorial'

// Expected Output : 'Development'

function findBig(str) {
  let rslt = str.split(" ");

  let res = "";
  rslt.map((e) => {
    if (e.length > res.length) {
      res = e;
    }
  });

  return res;
}

let str = "Web Development Tutorial";
console.log(findBig(str));
