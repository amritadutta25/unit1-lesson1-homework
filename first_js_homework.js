// -------------------------- Section 1 --------------------------

/* 1. DRY stands for 'Don't Repeat Yourself'.
DRY principle should be followed to improve efficiency. This principle prevents code duplication
that reduces maintainabililty issue, improves efficiency and makes the code less error-prone.

Programming tools to write DRY code are for loops, while loops and functions.
*/


/* 2. Difference between const, let and var:
    const - a variable declared with const cannot be re-assigned and it block scoped.
    let - a variable declared with let can be re-assigned but it is block scoped.
    var - a variable declared with var can be re-assgined but it is function scoped.
*/ 


// --------------------- Section 2 ----------------------------

{
const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kelvin';
const f = false;

console.log(a < b);
console.log(c > d);
console.log('Name' === 'Name');
console.log(a < b < c);
console.log(a * a == d);
console.log(e !== 'Kevin');
console.log(48 ==='48');
console.log(f !== e);

let g = 0;
console.log(g);
g = b + c;
console.log(g);
}


// 1.  Used 'let' to declare varibale g since we need to re-assign the variable g with b+c.

//  2. We don't get an error when we don't use const , let or var
// g = 0;
// console.log(g);
// g = b + c;
// console.log(g);

// 3. 
// 10 = g;
// we get a syntax error - SyntaxError: Invalid left-hand side in assignment. In JavaScript, left hand side is treated as a variable name.
// So here, 10 is read as a variable name but variable name cannot start with a number and hence the SyntaxError. g is actually the variable name 
// and 10 is the value to be assigned to g.
// Correct statement would be: g = 10;

//  ---------------------------- Section 3 -----------------------------

/*

while (true) {
	console.log('Do not run this loop');
}

The code above is an infinite loop because the condition in the while loop - while(true), always remains true and the loop will never terminate.
*/

/*
const runProgram = true;

while (runProgram) {
	console.log('Do not run this loop');
	runProgram = false;
}

This is not an infinite loop because in first iteration inside the loop we try to re-assign runProgram which was earlier declared 
as a const variable and const variables cannot be re-assigned and hence this throws a TypeError. 

Now assuming, runProgram was initially declared with 'let' then, in the first iteration runProgram === true and 
the loop gets executed but inside the loop runProgram is assigned false, so the second iteration never takes place so this is not an infinite loop.

The output is:
Do not run this loop
*/


// Reading code
{
// declare a variable 'letters' with let annd assign its valus as 'A'
let letters = "A";
// declare a variable 'i' with let annd assign its valus as 0. This variable is used for looping.
let i = 0;

// start a while loop that will run as long as i is less than 20
while (i < 20) {
    // 'A' is concatenated to the value of 'letters' before the current iteration
	letters += "A";

    // increment the value of variable i by 1
	i++;
}

// print the final value of 'letters' in the terminal
console.log(letters);
}


// Expected result: 'AAAAAAAAAAAAAAAAAAAAA'
// In each iteration, 'A' is concatenated to 'letters'. Before the loop stars, letters = 'A'. The loop is executed 20 times, so 'A' gets
// concatenated to 'letters' 20 times. Hence, the final output is a string with 'A' 21 times.

// Yes, the actual result is same as expected which is a string of 'A' 21 times.


// ------------------------- Section 4 ----------------------------------

// For loops -----
/*
Difference between for loop and while loop is the structure. 

For loop:
for (loop variable initialization; testing condition; loop variable update)
{
    ...
}

In FOR LOOP, in the loop declaration statement itself we declare the looping variable, the testing codition which if true runs the code block
and update the looping varibale.

While loop:
looping variable initialization is done before the while loop is declared. The testing condition is written when declaring while loop and the
looping variable is updated inside the loop code block.

eg. 
let i = 0

while (i <10){
    do something...
    i++
}
*/

/*
Both for loop and whole loop are used to execute same peice of code multiple times. Both for loop and while have a looping condition
such that the code block gets executed only when the condition is true.
*/

// For loop control panel
/*
The first part of the control panel is: Initializes the looping variable/counter 
The second part of the control panel is: Testing condition. If condition is true, the code block inside the loop gets executed, if false it moves 
to the next iteration or if it was the last iteration then loop gets terminated. 
The third part of the control panel is: Updates the looping variable or counter to move to the next iteration
*/

/*
For loop II
Write a for loop that will console.log the numbers 0 to 999.
*/

for (let i = 0; i < 1000; i++)
{
    console.log(i)
}

// For loop in reverse
// Console.log a countdown from 999 to 0.

for (let i=999; i>=0; i--)
{
    console.log(i)
}

// Write a for loop that uses string concatenation to send a message to the console as well as the current value of i.
// The loop should run from 1 to 10.

for (let i = 1; i <=10; i++)
{
    console.log("The value of i is: " + i + " of 10")
}


// Bonus Challenge (optional)
// Rewrite the above loop using String Interpolation/Template Literals instead of concatenation

for (let i = 1; i <=10; i++)
{
    console.log(`The value of i is: ${i} of 10`)
}


// Iteration
// Iterate over the StarWars array and print each element to the console.

const StarWars = ["Han", "C3PO", "R2D2", "Luke", "Leia", "Anakin"];

for (let starWar of StarWars)
{
    console.log(starWar)
}

// Iterate over the StarWars array again and print each character's name as well as the value of i.
function logStarWars(value, index)
{
    console.log(value, index)
}

StarWars.forEach(logStarWars)

// Bonus Challenge (optional):
// Figure out how to iterate over every second element of the StarWars array, starting with the first element.

for (let i=0; i < StarWars.length; i=i+2)
{
    console.log(StarWars[i])
}




