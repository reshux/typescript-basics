// Class declaration is the same as JavaScript.
class Person {
  // If you don't declare types, the following will default to any
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  // Methods are pretty similar to JavaScript
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

// We can leverage the typing power of TypeScript in instantiaton.
let Duruhan: Person = new Person('Duruhan', 'Unsal');
