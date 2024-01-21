//Part 1 Array and Object Destructing
const scores = [29, 32, 43, 45, 30, 23, 49, 33, 43];

const [firstScore, secondScore] = scores;

const student = {
  name: "Hilal",
  age: 19,
  isEnrolled: false,
};

const { name: studentName, age, ...myRest } = student;

console.log(`First Score: ${firstScore} Second Score: ${secondScore}`);
console.log(studentName, age, myRest);

//Part 2 'typeof' Operator and Array Length
console.log(typeof student); //output => object
console.log(typeof scores); // output => object
console.log(typeof myRest); // output => object
console.log(scores.length); //output => 9

//Part 3 Aritmethic, Comparsion and Logical Opertions
console.log(firstScore + secondScore); //output => 61
console.log(secondScore - firstScore); //output => 3
console.log(firstScore > secondScore); // output => false
console.log(firstScore < secondScore); // output => true

console.log(firstScore < secondScore && firstScore > student.age); // output => true
console.log(firstScore == secondScore || secondScore > student.age); // output => true

console.log(!(student.isEnrolled === true)); // output => true
