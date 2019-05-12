// This is to discuss type erasure and compiler error behaviour

// The type declarations are for checking during development time
// NOT for runtime. The whole process of transpiling from TypeScript
// to JavaScript is to help you catch bugs before it gets to browser.

// If you compile a .ts with errors, it will create a .js but the compiler
// will say that there's an error.

let mistake: number;

mistake = 1;
mistake = true;

// You will get the following error
// type-erasure.ts:13:1 - error TS2322: Type 'true' is not assignable to type 'number'.

// ----------
