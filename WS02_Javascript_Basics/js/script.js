console.log("Hello World!");

const userName = "Max";
let age = 20;
const favoriteAnimal = "Dog";

console.log("My name is " + userName);
console.log("I am " + age + " years old.");
console.log("My favorite animal is " + favoriteAnimal);

alert("Tervetuloa nettisivulleni!");

const visitorName = prompt("What is your name?");

console.log(visitorName);

console.log("Hello " + visitorName + "! Welcome to JavaScript!");

const userAge = prompt("How old are you?");
if (userAge >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}

function greetUser(visitorName) {
    console.log("Hello " + visitorName + "!");
}

greetUser(visitorName);

const button = document.getElementById("myButton");

button.addEventListener("click", function() {
    alert("Kaikki toimii oikein!");
});
