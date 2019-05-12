// A function without type declaration

function add1(a, b) {
  return a + b;
}

let sum1 = add1(1, 2); // Valid. sum = 3
let sum2 = add1('foo', 2); // Valid. sum = foo2

// A function with type declaration

function add2(a: number, b: number) {
  return a + b;
}

let sum3 = add2(1, 2); // Valid. sum = 3
let sum4 = add2('foo', 2); // Valid. sum = foo2

// --------
// Number of arguments don't have to match the function in JavaScript
// Default behaviour of functions in TypeScript is to expect matching
// number of arguments, even if you are not declaring argument types.
// You can however make an argument optional.

function add3(a: number, b: number, c?: number) {
  // optional argument has to be at the end
  return a + b;
}

// You can also give an argument a default value. This argument will
// behave as 'optional' in this case. To give an example:

function add4(a: number, b: number, c = 0) {
  // In this case you don't need the question mark following the argument
  return a + b + c;
}

let sum5 = add4(1, 2); // Valid. sum = 3
let sum6 = add4(1, 2, 3); // Valid. sum = 6
