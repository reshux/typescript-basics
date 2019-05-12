// Suppose we have the following function, which takes in
// a single argument and returns it. No type constraints.

function echo1(arg) {
  return arg;
}

// We are doing TypeScript. Let's type this out! We could
// do function echo1(arg: any): any { ... } but this isn't
// any different. Let's look into the 'generics'

function echo2<T>(arg: T): T {
  return arg;
}

// Rather than explicitly mentioning the type, we give a
// placeholder in the function, which is marked as <T>
// By specifying that the argument and function has the same
// type T we are creating a generic function that handles a
// single type of input and output

var test1: string = echo2(1); // This is not valid! The two are different
var test2: number = echo2(2); // This is valid! Both are number

// ---------
// Let's see how this works with classes

class Bird {
  constructor(readonly name: string, readonly color: string) {}
}

// Two classes that extend Bird
class Parrot extends Bird {}
class Eagle extends Bird {}

// One instance for each sub-class
let budgie = new Parrot('Sonny', 'blue');
let murica = new Eagle('Muricah', 'black');

// Let's create a function that echoes the input
// We can do the following: which is basically polymorphism
//// function echo3(arg: Bird): Bird {
////   return arg;
//// }
// This is not what we are after. What we wnat is:
function echo3<T extends Bird>(arg: T): T {
  return arg;
}
