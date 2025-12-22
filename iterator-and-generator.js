
function* gen() {
  yield 1;
  yield 2;
  return 99;  // return value of iterator
}

// const it = gen();
// console.log(it.next()); // { value: 1, done: false }
// console.log(it.next()); // { value: 2, done: false }
// console.log(it.next()); // { value: 99, done: true } <- iterator's return value
// console.log(it.next()); // { value: undefined, done: true }


function* fun() {
    yield 3;
    yield 5;

}

let he = fun()

console.log(he.next());