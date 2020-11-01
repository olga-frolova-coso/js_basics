// Exercise 1
// Write a function which should return sum of all numbers inside array

const numbers = [1, -1, 2, 3];

function sum(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) 
    {
        sum += numbers[i];
    }
    return sum;
}
console.log (sum(numbers));

// Exercise 2
// When you run arrayFromRange function should dispayd numbers from min to max 
// Also this function should accept negative numbers

function arrayFromRange(min, max) {
    let arr = [];
      for (let i = min; i <= max; i++) {
          arr.push(i);
      }
      return arr;
    }

const numbers = arrayFromRange(1, 8);

console.log(numbers); 

const negativeNumbers = arrayFromRange(-10, -1);

console.log(negativeNumbers);

// Exercise 3
// Need to create function which display the max number from the array

const numbers = [1, 2, 3, 4, 5, 7, 10, 999];

function getMax (numbers) {
    return numbers.reduce ((acc, curr) => acc > curr ? acc: curr);}

console.log (getMax (numbers));


// Exercise 4

let movies = [
    {title: 'a', year: 2019, rating: 4.7},
    {title: 'b', year: 2018, rating: 4.4},
    {title: 'c', year: 2019, rating: 4.3},
    {title: 'd', year: 2019, rating: 3.9},
]

// Ruturn all movies in 2019 with rating > 4
// Sort them by their rating in descending order
// Pick their title 'a', 'b' ...
// So, the result should be ["a", "c"] 

let movies2019 = movies.filter (function(item) {
    return item.rating > 4 && item.year == 2019;
});

console.log (movies2019)

let sortedDescending = movies2019.sort ((a,b) => a.rating - b.rating);

console.log (sortedDescending);

let titlesSorted = sortedDescending.map (function (a) {
    return a.title;
})
console.log (titlesSorted);



