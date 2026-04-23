function printInfo(name, age) {
  console.log(`Name: ${this.name}, Age: ${this.age}`);
}

const person = {
  name: "Ivan",
  age: 25,
};

printInfo.call(person, person.name, person.age);
