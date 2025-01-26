//1.variables
let fname = 'john';
const age = 19;
var isStudent = true; //first way

//output to console
console.log(fname);
console.log(age);
console.log(isStudent);

//undefined in console --> no output from the function

//printing fresh string
console.log('A-string');

//variable override
var number = 5;
number = 'five';
console.log(number);

//let - overcome the use of var ,const-constant value cant change once defined
let lname= "rock";
const pi =3.14; //strictness
//pi=532 --> error
console.log(pi)

//2.Data types
let num=1;  //integer
let string = "hi"; //string
let isActive= true; //boolean

let numberArray = [1,2,3];  // Array --> collection of same datatype 
console.log(numberArray[0]);
console.log(numberArray[1]);
console.log(numberArray); // full array

//3.operators

// arithmetic operators
let sum= 5+4;
console.log(sum);
let Yourage =19;
let CanVote= (Yourage>18);  //returns boolean
console.log(CanVote) 

// Arithmetic Operators
let a = 10;
let b = 5;

// Addition
let sumofnumbers = a + b; // 15
console.log('Addition (a + b):', sumofnumbers);

// Subtraction
let difference = a - b; // 5
console.log('Subtraction (a - b):', difference);

// Multiplication
let product = a * b; // 50
console.log('Multiplication (a * b):', product);

// Division
let quotient = a / b; // 2
console.log('Division (a / b):', quotient);

// Modulus (remainder)
let remainder = a % b; // 0
console.log('Modulus (a % b):', remainder);

// Exponentiation
let power = a ** b; // 100000
console.log('Exponentiation (a ** b):', power);

// Increment (increases a by 1)
a++; // 11
console.log('Increment (a++):', a);

// Decrement (decreases a by 1)
b--; // 4
console.log('Decrement (b--):', b);

// Reset a and b for further operations
a = 10;
b = 5;

// Comparison Operators
console.log('Comparison Operators:');

// Equal to
console.log('a == b:', a == b); // false

// Not equal to
console.log('a != b:', a != b); // true

// Strict equal to -->
console.log('a === b:', a === b); // false

// Strict not equal to  -->
console.log('a !== b:', a !== b); // true

// Greater than
console.log('a > b:', a > b); // true

// Less than
console.log('a < b:', a < b); // false

// Greater than or equal to
console.log('a >= b:', a >= b); // true

// Less than or equal to
console.log('a <= b:', a <= b); // false

// Logical Operators
console.log('Logical Operators:');

let c = true;
let d = false;

// Logical AND
console.log('c && d:', c && d); // false

// Logical OR
console.log('c || d:', c || d); // true

// Logical NOT
console.log('!c:', !c); // false
console.log('!d:', !d); // true


//4.functions  --> repeated code call again and again

function greet(name) {  // function defined with parameter name 
  return "Hello, " + name;  //returns the value 
}

console.log("Calling greet function:");
console.log(greet("rock")) ;//call function with argument
console.log(greet("rock1"));
console.log(greet("rock2"));

//---->

function Sum(a,b){
  let s=a+b;
  return s;
}

console.log("THe sum of numbers is :" ,Sum(1,2));// call function with arguments
console.log("THe sum of numbers is :" ,Sum(5,4));


// 5.conditional statements 

function canVote(Age){
  if (Age>=18) {  
    console.log("You can Vote");
  }
  else{
    console.log("You cannot vote");
  }
}

canVote(19) // calling canVote function 

// 6.Loops -> certain logic again and again
let users=["me","rock","ronaldo"];
console.log(users) ;
console.log(users[0]) ;
console.log(users[1]) ;// call each seperately

console.log("loop starts -->");

for (let i=0; i<3; i++ ){ // initialisation; conditional; increment/decrement 
    console.log(users[i]); //i=0,1,2
}

console.log("<---loop ends");

//automatic name update--> returns all users .length

let users1=["me","rock","ronaldo","rick","rich"];
console.log("loop starts -->");
let total=users1.length;
for (let i=0; i<total; i++ ){ // initialisation; conditional; increment/decrement 
    console.log(users1[i]); //i=0,1,2
}

console.log("<---loop ends");

//complex types
//objects in js--> 
//arrays in js --> arrays/vec in c++ -->arraylist in java
//objects in js -->maps in c++  --> hashmap in java
//object --> collection of key-value pairs key--> string value-> any data type in js

let user ={ //agrregate multiple data types in 1 object
  "name":"ronaldo",
  "age":19
}
console.log(user.name); //access value using .key 
console.log(user.age);

//Assignmet 1 - function that takes user as an input and greets them with name and age
function greeting(user){
  console.log("Greetings "+user+ 19 ); //string concatenation
  return 1; // or else returns undefined
}

let person ={ //agrregate multiple data types in 1 object
  "name":"ronaldo",
  "age":19
}

console.log(greeting(person.name)); //call function

