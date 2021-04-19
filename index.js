//types
let name = "Ethan";
let age = "20";
const interestRate = 1;

//arrays
let selectedColors = ['red', 'blue'];
selectedColors[2] = 'green';

//objects
let person = {
  name: "Ethan",
  age: "20"
};

//functions
function greet(name){
    console.log('hello ' + name);
} //no need for ;
greet('Ethan');


//change object age to 21
person.age = "21";
person['age'] = "20";

//output
//console.log(name);
//console.log(person);
//console.log(selectedColors);