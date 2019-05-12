class Animal {
  constructor(readonly name: string) {
    this.name = name;
  }
}

let lion = new Animal('King');
// I can access the 'name' property
console.log(lion.name);
// But I cannot assign a value to this property
lion.name = 'Mufasa'; // This will throw an error
