// Part 1: Variable Declarations and Conditionals

// Declare variables using var, let, and const
var studentName = "Alice";
let studentAge = 20;
const isEnrolled = true;

console.log(`Student Name: ${studentName}`);
console.log(`Student Age: ${studentAge}`);
console.log(`Is Enrolled: ${isEnrolled}`);

// A conditional statement to check a condition
if (studentAge >= 18) {
    console.log("The student is an adult.");
} else {
    console.log("The student is a minor.");
}


// Part 2: Custom Functions

// Function 1: A simple function that returns a greeting
function createGreeting(name) {
    return `Hello, ${name}! Welcome to the course.`;
}

// Function 2: A function that calculates the square of a number
function calculateSquare(number) {
    return number * number;
}

// Call the functions and log the results
let greetingMessage = createGreeting(studentName);
console.log(greetingMessage);

let squaredResult = calculateSquare(5);
console.log(`The square of 5 is: ${squaredResult}`);


// Part 3: Loop Examples

// Loop 1: A for loop to iterate over an array
const fruits = ["Apple", "Banana", "Cherry"];
console.log("Here are the fruits:");

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// Loop 2: A while loop to count down from a number
console.log("Countdown from 3:");
let countdown = 3;
while (countdown > 0) {
    console.log(countdown);
    countdown--;
}
console.log("Blast off!");


// Part 4: DOM Interactions

// DOM Interaction 1: Get an element by its ID and change its text content
const messageElement = document.getElementById("message");
messageElement.textContent = "This text was changed by JavaScript!";

// DOM Interaction 2: Add an event listener to a button
const changeTextButton = document.getElementById("changeTextButton");
changeTextButton.addEventListener("click", function() {
    messageElement.style.color = "red"; // DOM Interaction 3: Change an element's style
});

// DOM Interaction 4: Use a loop to dynamically create list items and add them to the DOM
const listContainer = document.getElementById("listContainer");
const itemsToAdd = ["First item", "Second item", "Third item"];

for (const item of itemsToAdd) {
    const li = document.createElement("li");
    li.textContent = item;
    listContainer.appendChild(li);
}