const age = 15;

if (age >= 18) {
  console.log("Sarah can start driving license 🚗");
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}

const birthYear = 1991;
let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}

console.log(century);

const inputYear = "1991";
console.log(Number(inputYear) + 8, inputYear);

const nameMe = "Etienne";
console.log(Number(nameMe));

const ageTwo = 18.0;
console.log(String(ageTwo), ageTwo);

// type coercion
console.log("I am " + 23 + " years old");
console.log("23" - "10" - 3);

let n = "1" + 1; // '11'
n = n - 1; // 10
console.log(n);
