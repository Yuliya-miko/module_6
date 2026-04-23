const persons = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 35 },
  { name: "Pierre", age: 18 },
  { name: "David", age: 15 },
  { name: "Luc", age: 16 },
];

const adults = persons.filter((person) => person.age >= 18);

const names = adults.map((person) => person.name);

console.log(names);

console.log(adults);
