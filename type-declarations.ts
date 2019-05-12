// Type declarations

// All JavaScript primitives are valid for TypeScript
// TypeScript has post-fix declaration

// Follow the variable by the type
let a: number;
let b: boolean;
let c: string;

// If you use VSCode, you'll automatically get an error on line 13
a = 10; // This will work
a = true; // This will fail

b = true;
c = 'Hello World';

// How do you declare for arrays and array elements?
let myArray: number[]; // This is an array of numbers

// Line 22 and 23 are valid
myArray = [];
myArray = [1, 2, 3];

// Line 26 and 27 will fail
myArray = ['Hello'];
myArray = 1;

// How about tuples?
// Technically not an array, array-like structure
let myTuple: [number, boolean];

// Line 34 and 35 are valid
myTuple = [1, true];
myTuple = [-1, false];

// Line 38 and 39 will fail
myTuple = [1];
myTuple = [true, false];
