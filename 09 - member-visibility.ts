class Coder {
  // By default properties are public. We can make them
  // private by adding the keyword private at the beginning.
  //// private firstName: string;
  //// private lastName: string;

  // TypeScript allows us to do the following. We don't have to declare above.
  constructor(private firstName: string, private lastName: string) {
    // You also don't need the following lines:
    //// this.firstName = firstName;
    //// this.lastName = lastName;
  }

  // This mimics a getter that we would see in a strict OOP language.
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  // This mimics a setter that we would see in a strict OOP language.
  setFirstName(firstName: string) {
    this.firstName = firstName;
  }
}

// There's also member variable type 'protected'. This makes them
// accessible by any class that extends that which contains it but
// it is not accessible outside.
