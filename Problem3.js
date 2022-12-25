/*
1. You are given three numbers 13, 79, and 45. Write a program that will print the
largest number using if-else.
2. You are given a triangle with the sides 9, 8, 9. Write a program to check whether a
triangle is Isosceles or not using if-else.

Isosceles => two sides are equal
*/

// 1
let num1 = 13;
let num2 = 79;
let num3 = 45;

if(num1 > num2 && num1 > num3){
    console.log('13 is the largest number');
}
else if(num2 > num3 && num2 > num1){
    console.log('79 is the largest number');
}
else if(num3 > num1 && num3 > num2){
    console.log('45 is the largest number');
}

// 2
let triangle1 = 9;
let triangle2 = 8;
let triangle3 = 9;

if(triangle1 > triangle3 && triangle2 > triangle3){
    console.log('Triangle1 & Triangle2 are equal');
}
else if(triangle1 > triangle2 && triangle3 > triangle2){
    console.log('Triangle1 & Triangle3 are equal');
}
else if(triangle2 > triangle1 && triangle3 > triangle1){
    console.log('Triangle2 & Triangle3 are equal');
}