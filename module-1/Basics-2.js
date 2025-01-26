
//Assignment 2 - Write a function that takes a new object as input which has name , age  and gender and greets the user with their gender (Hi Mr/Mrs/Others harkirat, your age is 21)
function greeting (name,age,gender){
    if (age>21){
      if(gender == "male"){
          return "Hi Mr." + name + ",your age is "+age+ " You can Vote!"; }
      else {
           return "Hi Mrs." + name + ",your age is "+age+ " You can Vote!"; ;
       }
    }
    else {
      return "you are under age ! you cannot vote!"
    }
    
}

let person ={ //agrregate multiple data types in 1 object
  "name":"ronaldo",
  "age":22,
  "gender":"male"
}

console.log(greeting(person.name,person.age,person.gender)); //

//Arrays  let you group data together
console.log("Array stars --> ")
const users = ["harkirat", "raman", "diljeet"];
const totalUsers = users.length;
const firstUser = users[0];

console.log(users)
console.log(totalUsers)
console.log(firstUser)
console.log("Array ends --> ")

//Write a function that takes an array of numbers as input, and returns a new array with only even values. Read about filter in JS
function even (array){
  for (let i =0;i<array.length;i++ ){
        if (i%2===0){
           console.log(i);
        }
  }
}

const my_array=[1,2,3,4]
console.log("call even function -->")
even(my_array)
console.log("<---even function ends")

//using filter --> filters copys array 
function evencheck (num){ //num --> each element of array 
  return num % 2 === 0; //automatically filter send each element of array one by one
}

const my_numbers=[1,2,3,4]
const result = my_numbers.filter(evencheck)
console.log("Even number using filter: ", result)

//Array of Objects
//We can have more complex objects, for example an array of objects
const members = [{
		name: "Harkirat",
		age: 21
	}, {
		name: "raman",
		age: 22
	}
]

const user1 = members[0] 
const user1Age = members[0].age
console.log(user1)
console.log(user1Age)

//Assignment
//Write a function that takes an array of users as inputs and returns only the users who are more than 18 years old

function votecheck(users){ //function to return the user > 18 age

    const eligible = [];
    for (let i=0;i<users.length;i++){
        if (users[i].age >= 18){
            eligible.push(users[i]); //.push --> push elements to array
        }
    }
    return eligible
  
}


const userslist = [
  {
    name:"ronaldo",
    age:16
  },
  {
    name:"rock",
    age:20
  }
]

console.log("only this guys can vote --> " ,votecheck(userslist)) //returns the user > 18 age

//Object of Objects
//We can have an even more complex object (object of objects)
const contact = {
	name: "harkirat",
	age: 19,
	address: {
		city: "Delhi",
		country: "India",
		address: "1122 DLF"
	}
}

const city = contact.address.city;
console.log(city)

//Assignment
//Create a function that takes an array of objects as input,
//and returns the users whose age > 18 and are male

 function check(users){  //returns the users whose age > 18 and are male
      const eligible = [];
     for (let i=0;i<users.length;i++){
         if (users[i].age >= 18 && users[i].gender === "male"){
              eligible.push(users[i]); //.push --> push elements to array
        }
     }
     return eligible
 }

function CheckUsingFilter(users){
    return users.age >= 18 && users.gender == "male"
}

const avengers = [
  {
    name:"ironman",
    age:30,
    gender:"male"
  },
  {
    name:"spiderman",
    age:16,
    gender:"male"
  },
  {
    name:"ms-marvel",
    age:18,
    gender:"female"
  }
]

console.log("Who can vote and male  --> ", check(avengers)) //returns the users whose age > 18 and are male
console.log(" using filter -->", avengers.filter(CheckUsingFilter) )//using filter 
