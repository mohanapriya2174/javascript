"use strict";
const arr = [1, 2, 3, 4, 4, 5, 5, 7];
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);
console.log(arr.__proto__.__proto__);

// Array.prototype.unique = function () {
//   return [...new Set(this)];
// };
// console.log(arr.unique());

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
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};
Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(this.speed);
};
Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(this.speed);
};
const bmw = new Car("bmw", 120);
const mercedes = new Car("mercedes", 120);

class Carcl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerate = function () {
    this.speed += 10;
    console.log(this.speed);
  };
  brake = function () {
    this.speed -= 5;
    console.log(this.speed);
    return this;
  };
  get speedUS() {
    return this.speed / 1.6;
  }
  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const ford = new Carcl("ford", 100);
console.log(ford.speedUS);
ford.accelerate();

bmw.accelerate();
bmw.brake();
mercedes.accelerate();
mercedes.brake();
console.log(bmw.__proto__ === Car.prototype);

////////////////////////////////
// this makes the code works with inheritance from car method  and also
// implements method overloadind
const EV = function (make, speed, charge) {
  Car.call(this, make, speed); // here the same cod eis reused insted of getting the value of makeand speed from above car method
  this.charge = charge;
};
EV.prototype = Object.create(Car.prototype); // this line makes the intraction at  this place btw EV method and car
EV.prototype.chargeBatery = function (chargeTo) {
  this.charge = chargeTo;
};
// this accelerate method is a method shoing polimorphism
EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    `${this.make} is going at ${this.speed} km/h tand this makes the battery to drain ${this.charge} `
  );
  console.log(this);
};

// class inheritance
class EVcl extends Carcl {
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }
  chargeBatery = function (chargeTo) {
    this.#charge = chargeTo;
    return this;
  };
  accelerate = function () {
    this.speed += 20;
    this.#charge--;
    console.log(
      `${this.make} is going at ${
        this.speed
      } km/h tand this makes the battery to drain ${this.#charge} `
    );
    console.log(this);
    return this;
  };
}
const ola = new EVcl("ola", 120, 70);
console.log(ola);
// console.log(ola.#charge);

const tesla = new EV("tesla", 120, 100);
tesla.accelerate();

//Object.create
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
    console.log(this);
  },
};
const steven = Object.create(PersonProto);
console.log(steven);
steven.name = "Steven";
steven.birthYear = 2002;
steven.calcAge();
console.log((steven.__proto__ = PersonProto));
const sarah = Object.create(PersonProto);
sarah.init("Sarah", 1979);
sarah.calcAge();
sarah.init("Sarah", 1979);

class PersonCL {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  calcAge() {
    console.log(`I'm ${this.fullName} and I'm ${2024 - this.birthYear} old`);
  }
}

class StudentCl extends PersonCL {
  constructor(fullName, birthYear, course) {
    // Always needs to happen first!
    super(fullName, birthYear);
    this.course = course;
  }
  introduce() {
    console.log(`My name is ${this.fullName} and I
study ${this.course}`);
  }
  calcAge() {
    console.log(`I'm ${2037 - this.birthYear} years
old, but as a student I feel more like ${2037 - this.birthYear + 10}`);
  }
}
const martha = new StudentCl("Martha Jones", 2012, "Computer Science");
martha.introduce();
martha.calcAge();
