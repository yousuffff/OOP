'use strict';
// constructor function
const Person = function (firstName, lastName, birthYear) {
  //instance variables
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthYear = birthYear;
}
const yousuf = new Person('Mohd', 'Yousuf', 1999);
console.log(yousuf);
const uzair = new Person('Uzair', 'Ahmad', 1999);
console.log(uzair);

// step of construction function
//1. New object {} is created
//2. function is called, this = {}
//3. {} linked to protype
//4. function automatically return {}.

// Prototype
Person.prototype.calC = function () {
  console.log(2024 - this.birthYear);
}
yousuf.calC();

Person.prototype.species = 'HOMO SAPAINS';

console.log(yousuf.__proto__);
console.log(yousuf.__proto__ === Person.prototype);

//Species is not directly connected to yousuf but its a part or person prototype so its present in yousuf object

///////////////////////////////////////
// Coding Challenge #1

/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀
*/

const CarDis = function (make, speed) {
  this.make = make;
  this.speed = speed;
}
CarDis.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`new speed = ${this.speed}`); // we also can access this.make property here
}
CarDis.prototype.brake = function () {
  this.speed -= 5;
  console.log(`new speed = ${this.speed}`);
}

const car1 = new CarDis('BMW', 120);
const car2 = new CarDis('Merecedes', 95);
console.log(car1)
car1.accelerate();
car1.accelerate();
car1.brake();
car1.accelerate();

console.log(car2)
car2.accelerate();
car2.brake();