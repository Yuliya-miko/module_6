const arr = [
  1,
  2,
  3,
  1,
  5,
  4,
  2,
  3,
  5,
  "they",
  "don't",
  "know",
  "that",
  "we",
  "know",
  "that",
  "they",
  "know",
];
let uniqueArr = [];
for (let i = 0; i < arr.length; i++) {
  if (!uniqueArr.includes(arr[i])) {
    uniqueArr.push(arr[i]);
  }
}
console.log(uniqueArr);
