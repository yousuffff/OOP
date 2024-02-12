// 'use strict';
// // constructor function
// const Person = function (firstName, lastName, birthYear) {
//   //instance variables
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.birthYear = birthYear;
// }
// const yousuf = new Person('Mohd', 'Yousuf', 1999);
// console.log(yousuf);
// const uzair = new Person('Uzair', 'Ahmad', 1999);
// console.log(uzair);

// // step of construction function
// //1. New object {} is created
// //2. function is called, this = {}
// //3. {} linked to protype
// //4. function automatically return {}.

// // Prototype
// Person.prototype.calC = function () {
//   console.log(2024 - this.birthYear);
// }
// yousuf.calC();

// Person.prototype.species = 'HOMO SAPAINS';

// console.log(yousuf.__proto__);
// console.log(yousuf.__proto__ === Person.prototype);

// //Species is not directly connected to yousuf but its a part or person prototype so its present in yousuf object

// ///////////////////////////////////////
// // Coding Challenge #1

// /* 
// 1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
// 2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
// 3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
// 4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

// DATA CAR 1: 'BMW' going at 120 km/h
// DATA CAR 2: 'Mercedes' going at 95 km/h

// GOOD LUCK 😀
// */

// const CarDis = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// }
// CarDis.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(`new speed = ${this.speed}`); // we also can access this.make property here
// }
// CarDis.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(`new speed = ${this.speed}`);
// }

// const car1 = new CarDis('BMW', 120);
// const car2 = new CarDis('Merecedes', 95);
// console.log(car1)
// car1.accelerate();
// car1.accelerate();
// car1.brake();
// car1.accelerate();

// console.log(car2)
// car2.accelerate();
// car2.brake();

// // construction function

// // class declaration
// class Personal {
//   constructor(fullName, birthDate) {
//     this.fullName = fullName;
//     this.birthDate = birthDate;
//   }
//   // methoid willl be added to .prototype propperty

//   calCage() {
//     console.log(2024 - this.birthDate)

//   }
//   // getter and setter methohd
//   set fullName(name) {
//     if (name.includes(' ')) this._fullName = name;
//   }
//   get fullName() {
//     return this._fullName;
//   }
//   /////////Static Methods 
//   // static method only work with constructor like Number , Array . from method in Array.from() is static method And in Number.praseFloat method is static method.
//   static hey() {
//     console.log('Hey Buddy ')
//     console.log(this);
//   }
// }

// const amir = new Personal('Yousuf mohd', 1999);
// amir.calCage()
// Personal.hey()

// // 1. classes are not hoisted.
// // 2 . classes are also first class citizen like function
// // 3. classes are excuted in strict mode




// // console.log(Personal.prototype);


///////////////////////////////////////
// Coding Challenge #2

/*
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

DATA CAR 1: 'Ford' going at 120 km/h

GOOD LUCK 😀
*/

// class carInfo {
//   constructor(carName, speed) {
//     this.carName = carName;
//     this.speed = speed;
//   }
//   accelerate() {
//     this.speed += 10;
//     console.log(`new speed = ${this.speed}`); // we also can access this.make property here
//   }
//   brake() {
//     this.speed -= 5;
//     console.log(`new speed = ${this.speed}`);
//   }
//   get speedUS() {
//     return this.speed / 1.6;
//   }
//   set speedUS(speed) {
//     this.speed = speed * 1.6;
//   }
// }
// const newCar = new carInfo('Ford', 120)

// newCar.accelerate();
// newCar.accelerate();
// newCar.brake();
// console.log(newCar.speedUS);
// newCar.speedUS = 75

// ///////////////////////////////////////
// // Inheritance Between "Classes": Constructor Functions

// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

// const Student = function (firstName, birthYear, course) {
//   Person.call(this, firstName, birthYear);
//   this.course = course;
// }
// console.dir(Student.prototype.constructor);;

// // Linking prototypes
// Student.prototype = Object.create(Person.prototype);

// Student.prototype.introduce = function () {
//   console.log(`My name is ${this.firstName} and I study ${this.course}`);
// };

// const mike = new Student('Mike', 2020, 'Computer Science');
// mike.introduce();
// mike.calcAge();

// console.log(mike.__proto__);
// console.log(mike.__proto__.__proto__);

// console.log(mike instanceof Student);
// console.log(mike instanceof Person);
// console.log(mike instanceof Object);

// Student.prototype.constructor = Student;

///////////////////////////////////////
// Coding Challenge #3

/*
1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car. Besides a make and current speed, the EV also has the current battery charge in % ('charge' property);
2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo';
3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';
4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! HINT: Review the definiton of polymorphism 😉

DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/

// const Car = function (name, speed) {
//   this.name = name;
//   this.speed = speed;
// }

// Car.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(`${this.name}going at ${this.speed} km/h, with a charge of ${this.charge}%`)
// }
// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(`new speed = ${this.speed}`); // we also can access this.make property here
// }
// const EV = function (name, speed, charge) {
//   Car.call(this, name, speed);
//   this.charge = charge;
// }
// EV.prototype = Object.create(Car.prototype);
// EV.prototype.chargeBattery = function (chargeTo) {
//   this.charge = chargeTo;
// }
// EV.prototype.accelerate = function () {
//   this.speed += 20;
//   this.charge -= 1;
//   console.log(`${this.name}going at ${this.speed} km/h, with a charge of ${this.charge}%`);
// }




// const tesla = new EV('Tesla', 120, 23)
// console.log(tesla);
// tesla.chargeBattery(90);
// tesla.accelerate();
// tesla.accelerate();
// tesla.accelerate();
// tesla.brake()
// tesla.accelerate();
// console.dir(tesla)

class PersonCl {
  constructor(fullname, email) {
    this.fullname = fullname;
    this.email = email;
  }
}
class StudentCl extends PersonCl {
  constructor(fullname, email, password) {
    super(fullname, email)
    // this.password = password

  }
  // set passwordChk(password) {
  //   if (!password.includes(' ')) this._password = password;
  //   else alert('Please enter 8 characters in password')
  // }
  // get passwordChk() {
  //   return this._password;
  // }
  // introduce() {
  //   console.log(`Hey my name is ${this.fullname} and my email is ${this.email}`)
  // }
}

const nisha = new StudentCl('Nisha', 'nisha43201@gmail.com')
// nisha.introduce();
console.dir(StudentCl.__proto__ === PersonCl.__proto__)

