// 2.1) Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.

let schedule = {};

console.log( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

console.log( isEmpty(schedule) ); // false

function isEmpty(schedule) {
    for (let key in schedule) {
      
      return false;
    }
    return true;
  }



// 2.2) Write the function that takes two numbers and returns the maximum of two

// function maxNumber(a, b) { // your code }

// maxNumber(1, 2) // 2


function maxNumber(a, b) {
    if (a > b) {
      return a;
    } else {
      return b;
    }
  }
  let result = maxNumber(7,10);
  console.log(result); 

// 3. We have an object storing salaries of our team:

// let salaries = { Mykola: 250, Pavlo: 250, Petro: 500 } Write the function to sum all salaries and return it. Should be 1000 in the example above.

// If salaries is empty, then the result must be 0.

let salariesTotal = {
    Mykola: 250, 
    Pavlo: 250, 
    Petro: 500
  };
  
  let sum = 0;
  for (let key in salariesTotal) {
    sum += salariesTotal[key];
  }
  
  console.log(sum);

//   3.1) We have an object storing salaries of our team:

// let salaries = { Mykola: 250, Pavlo: 250, Petro: 500 } Write the function that returns name and value of employer that gets biggest salary

let salaries = {
    Mykola: 250, 
    Pavlo: 250, 
    Petro: 500
  };

for (let key in salaries)

console.log(salaries[key]); 

const getMaxKey = obj => {
    const maxValue = Math.max.apply(null,Object.values(obj))
    return Object.keys(salaries).filter(k => salaries[k] === maxValue)
}
console.log(getMaxKey(salaries));

// 4. Create a function multiplyNumeric(obj) that multiplies all numeric properties of obj by 2.


let obj = {
  width: 200,
  height: 300,
  title: "My menu"
};


function multiplyNumeric(obj) {
    for (let key in obj) {
      if (typeof obj[key] == 'number') {
        obj[key] *= 2;
      }
    }
  }


 