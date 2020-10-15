// 1. Rewrite if with ?

let a = 1;
let b = 2; 
let result; 
result = (a + b < 10) ? 'Few' : 'Many'; 
console.log (result);

// 2. Write an if condition to verify that the age variable is between 18 and 90 inclusive. 

let age = 18;
if (age >= 18 && age <= 90) {
    console.log('Welcome on board!');
}
else {
    console.log('Access denied.');
}

/* 3. Write script that will
accept user name
welcome user with his username
ask his birthday year
calculate how old is user, and print (or alert) his calculated age
Example: 
-> Please, enter your first name <- Mykola -> Hello, Mykola, nice to meet you. 
-> Please enter your birthday year <- 1900 -> 119 years */

let userName = prompt ('Please, enter your first name', '');
if (userName) {
    alert (`Hello, ${userName}, nice to meet you.`);
}
else {
    alert ('Invalid input');
}
let userBirthYear = prompt ('Please enter your birthday year', '');
let userAge = 2020 - userBirthYear;
if (userAge) {
    alert (`You are ${userAge} years old`);
}
else {
    alert ('Invalid input');
}

/* 4. Write a script which will convert number into corresponding letter, and print(or alert) result:
The grades should be computed as follows : Range Grade <60 F <70 D <80 C <90 B <100 A

Example: for number 92 - print "A" for number 29 - print "F" */


let rangeGrade = prompt ('Enter your grade');
if (rangeGrade < 60) {
    alert ('F');
}
if (rangeGrade < 70) {
    alert ('D');
}
if (rangeGrade < 80) {
    alert ('C');
}
if (rangeGrade < 90) {
    alert ('B');
}
if (rangeGrade < 100) {
    alert ('A');
}
else {
    alert ('Invalid range'); 
}

