// TypeScript interfaces let us define templates for an object
interface Character {
  firstName: string;
  lastName: string;
  // You don't really create methods in interfaces, you define a nature.
  getFullName(): string;
}

class Foo implements Character {
  firstName: string;
  lastName: string;
  // getFullName starts it life as such:
  //   getFullName(): string {
  //     throw new Error('Method not implemented.');
  //   }
  // we write the method in the class.
  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}

// A SIDE NOTE HERE: TypeScript is happy with Duck Typing
