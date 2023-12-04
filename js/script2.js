"use strict";
// function gramCal(eachWeights){
//     return eachWeights * 25;
// }

// function foodPrefered(idli,vada){
//     const idliWeight=gramCal(idli);
//     const vadaWeight=gramCal(vada);
//     // console.log(idli,vada);
//     const food=`i would like to have ${idliWeight} grams ofidlies and ${vadaWeight} grams of vadas.👍😊💕`;
//     return food;
// }
// console.log(foodPrefered(2,1));
// const breakFast=foodPrefered(3,1);
// console.log(breakFast);
// console.log(foodPrefered(3,1));

// const calAge=birthYear=>2023-birthYear;
// // const age=calAge(2004);
// console.log(`i'm ${calAge(2004)} now!😎😁😀`);

// const monaArrey=[
//     'mona',
//     'priya',
//     2023-2004,
//     ['sanga','aarthi']
// ]
// const mona={
//     firstName:'mona',
//     lastName:'priya',
//     age:2023 - 2004,
//     frinds:['sanga','saran']
//
// };
// const wishTo=prompt("what would you like to know about mona");
// console.log(mona[wishTo]);
// const mona = {
//     firstName:'mona',
//     lastName:'priya',
//     birthYear: 2004,
//     profession:"student",
//     frinds:['sanga','saran'],
//     driverLicence:true,
//     calAge: function (){
//         // console.log(this);
//         return 2023-this.birthYear;
//     },
//     getSummary:function(){
//         return(`${this.firstName} is a ${this.profession}, and she has ${this.driverLicence?'a':'no'} driving licence`);
//     }
// };
// console.log(mona.calAge());

// // console.log(mona.calAge());
// // console.log(mona.calAge());
// // console.log(mona.calAge());

// console.log(mona.getSummary());
// console.log(`${mona.firstName} is a ${mona.calAge()} year old girl, and she has ${mona.driverLicence?'a':'no'} driving licence`);
//--------------------------------------------

// const Mark={
//     fullName:'Mark Miller',
//     mass:78,
//     height:1.69,
//     calcBMI:function(){
//        return this.mass/this.height**2;
//     }
// }
// const John={
//     fullName:"John Smith",
//     mass:92,
//     height:1.95,
//     calcBMI:function(){
//         return this.mass/this.height**2;
//      }

// }
// console.log(Mark.calcBMI());
// console.log(John.calcBMI());
// if(John.calcBMI>Mark.calcBMI ){
//     console.log(`${John.fullName}'s BMI(${John.calcBMI()}) is greater than ${Mark.fullName}'s BMI(${Mark.calcBMI()})`);
// }
// else{
//     console.log(`${Mark.fullName}'s BMI(${Mark.calcBMI()}) is greater than ${John.fullName}'s BMI(${John.calcBMI()})`);
// }
//--------------------------------------------------------------
// const monaArrey=[
//     'mona',
//     'priya',
//     2023-2004,
//     ['sanga','aarthi']
// ];
// const newNew=[];
// for(i=0;i<monaArrey.length;i++){
//     console.log(monaArrey[i]);
//     newNew[i]=monaArrey[i];
// //     newNew[i]=typeof monaArrey[i];
// }
// console.log(newNew);

// let dice = Math.trunc(Math.random() * 6) + 1;

// while (dice !== 6) {
//   console.log(`you rolled a ${dice}`);
//   dice = Math.trunc(Math.random() * 6) + 1;
// }

//
// const tempamp = function (t1, t2) {
//   const temp = t1.concat(t2);
//   let max = 0;
//   let min = 0;
//   for (let i = 0; i < temp.length; i++) {
//     const currtemp = temp[i];
//     // if (typeof currtemp !== "Number") continue;
//     if (currtemp > max) max = currtemp;
//     if (currtemp < min) min = currtemp;
//   }
//   console.log(temp);
//   console.log(max, min);
//   return max - min;
// };
// console.log(tempamp([6, "error", 3, 9], [1, 10]));

//-----------------------------------------------------------

// const printForcast = function (temp) {
//   let str = " ";
//   for (i = 0; i < temp.length; i++) {
//     str = str + `${temp[i]}*C in ${i + 1} day...`;
//   }
//   console.log("...." + str);
// };
// printForcast([17, 21, 23]);
let age = 21;
let oldage = age;
age = 31;
console.log(age);
console.log(oldage);
let me = {
  name: "mona",
  age: 21,
};
let frnd = me;
me.age = 22;
console.log(me);
console.log(frnd);
let lastname = "willem";
let oldLastname = lastname;
lastname = "devis";
console.log(lastname);
console.log(oldLastname);

let mona = {
  firstName: "mohanapriya",
  lastName: "sarvanan",
  age: 27,
  family: ["shoba", "gopi", "hari"],
};
const monacopy = Object.assign({}, mona);
monacopy.lastName = "dharanidharan";
console.log(mona);
console.log(monacopy);

monacopy.family.push("amsa", "gnanam");

console.log(monacopy);
console.log(mona);
