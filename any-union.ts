// 'any' type can be used to migrate JavaScript into TypeScript

let myAny: any;
// The following examples are all valid
myAny = 10;
myAny = 'Hello World';
myAny = true;

// ----------
// Let's also talk about unions. Suppose we have a variable that will
// take on at most two types, for example number and boolean. This
// variable will have a 'union' type.

let myUnion: number | boolean;
// The following examples are valid
myUnion = 10;
myUnion = false;
// The following will fail
myUnion = 'Hello World';
