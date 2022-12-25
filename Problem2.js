/*
You are given an array:

var fruits = ['Apple', 'Banana', 'Orange'];

a) Find the index of ‘Banana’ and replace ‘Banana’ with ‘Mango’.
b) Remove ‘Orange’ and add ‘Watermelon’.
*/

// a
var fruits = ['Apple', 'Banana', 'Orange'];

console.log(fruits.indexOf('Banana'));

fruits[1] = 'Mango';
console.log(fruits);

// b
fruits.pop();
fruits.push('Watermelon');
console.log(fruits);