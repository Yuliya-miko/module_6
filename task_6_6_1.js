let stringPolidrom = "довод";
let stringPolidromLowerCase = stringPolidrom.toLowerCase();
let stringPolidromReverse = stringPolidromLowerCase
  .split("")
  .reverse()
  .join("");
if (stringPolidromLowerCase === stringPolidromReverse) {
  console.log("Строка является полиндромом");
} else {
  console.log("Строка не является полиндромом");
}
console.log(stringPolidrom.split(""));
