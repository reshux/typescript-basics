// This is a copy of the class we have in classes.ts
class Person {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  greet() {
    console.log('Hello JavaScript');
  }
}

// Let's create a new class Developer which inherits from Person
class Developer extends Person {
  // We override the inherited method
  greet() {
    console.log('Hello TypeScript');
  }
  // Super key-word is still very valuable in TypeScript
  greetLikeNormalPeople() {
    super.greet();
  }
}

let aDeveloper = new Developer('Duruhan', 'Unsal');

// Let's talk about polymorphism too while we're at it.
let anotherDeveloper: Person = new Developer('Tom', 'Tomington');

// This second developer is of type Person. You can still make this instance
// a Developer, because Developer extends Person. When you call methods on this
// instance, you will therefor only have the method greet available to you BUT
// this greet method will return 'Hello TypeScript' (developer)
// not 'Hello JavaScript' (person)
