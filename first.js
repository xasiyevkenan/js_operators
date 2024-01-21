//Part 1 Array Destructing and Length
const numbers = [10, 20, 30, 40, 50];

let [firstNumber, secondNumber] = numbers; // i don't created const becouse i need override later.

console.log(`First Number: ${firstNumber} Second Number: ${secondNumber}`);
console.log(numbers.length);

//Part 2 'typeof' Operator
myString = "it,s a string variable";
myNumber = 212;
myBoolean = false;
myUndefined = undefined;
myObject = { name: "Hilal" };

console.log(typeof myString); //output => string
console.log(typeof myNumber); //output => number
console.log(typeof myBoolean); //output => boolean
console.log(typeof myUndefined); //output => undefined
console.log(typeof myObject); //output => object

//Part 3 Arithmetic and Comparsion Operators
firstNumber = 12;
secondNumber = 18;

console.log(firstNumber == secondNumber); //false
console.log(firstNumber === secondNumber); //false
console.log(firstNumber != secondNumber); //true
console.log(firstNumber !== secondNumber); //true
console.log(firstNumber < secondNumber); //true
console.log(firstNumber > secondNumber); //false
console.log(firstNumber <= secondNumber); //true
console.log(firstNumber >= secondNumber); //false

//Part 4 Logical Experessions
firstNumber = 22;

console.log(firstNumber % 2 == 1 && firstNumber > 0);
console.log(firstNumber % 2 == 1 || firstNumber > 0);
console.log(!(firstNumber < 0));
