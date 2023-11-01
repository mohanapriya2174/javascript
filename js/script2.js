
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

let dice=Math.trunc(Math.random() * 6)+1;

while(dice!==6){
    console.log (`you rolled a ${dice}`);
    dice=Math.trunc(Math.random() * 6)+1;
}
const age =19;