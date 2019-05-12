// Suppose we have the three following variables.

// let first: number;
// let second: boolean;
// let third: string;

// Let's get rid of the type declarations.

let first = 10;
let second = true;
let third = 'TypeScript';

// What happens when I assign 'true' to variable 'first'?
// This will throw an error. Since at variable declaration
// we assigned it a number value, it implicitly took on the
// type number. Hence, a boolean value is not assignable to 'first'

first = true;

// --------
// What about functions?

function greet(): string {
  return 'Hello people of TypeScript!';
}

let greeting1 = greet();

// 'greeting1' has implicitly been assigned the type 'string'
// This will not work if value assignment happens on a different
// line than the variable declaration.

let greeting2;
greeting2 = greet();

// 'greeting2' still has the type 'any'
