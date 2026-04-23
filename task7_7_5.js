function getUniqueSorted(arr) {
  const unique = arr.filter((num, index) => arr.indexOf(num) === index);
  return unique.sort((a, b) => a - b);
}

const arr= [4, 2, 7, 2, 4, 1, 8, 7,5,3,2];

console.log(getUniqueSorted(arr));
