const input = require('readline-sync');
let str = "LaunchCode";


//a) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.

console.log(str.length);
let newString = (str.slice(3,10)+str.slice(0,3));
console.log(newString);


//Use a template literal to print the original and modified string in a descriptive phrase.

console.log(`\nthe original code is ${str} and the modified code is ${newString}`);

//b) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.

let answer = input.question("\nHow many numbers do you want to relocate?\n\n");

//c) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.

if (answer > str.length) { str.slice(0,3) + console.log("number invalid");

}