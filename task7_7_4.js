function setFullName(fullName) {
  this.fullName = fullName;
}

const persons = [
  { name: "John", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 35 },
  { name: "Pierre", age: 18 },
  { name: "David", age: 15 },
  { name: "Luc", age: 16 },
];

const setPersonFullName = setFullName.bind(persons);

setPersonFullName("John Smith");

console.log(persons.fullName);
