
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
const mona = {
    firstName:'mona',
    lastName:'priya',
    birthYear: 2004,
    profession:"student",
    frinds:['sanga','saran'],
    driverLicence:true,
    calAge: function (){
        // console.log(this);
        return 2023-this.birthYear;
    },
    getSummary:function(){
        return(`${this.firstName} is a ${this.profession}, and she has ${this.driverLicence?'a':'no'} driving licence`);
    }
};
console.log(mona.calAge());

// console.log(mona.calAge());
// console.log(mona.calAge());
// console.log(mona.calAge());
 
console.log(mona.getSummary());
console.log(`${mona.firstName} is a ${mona.calAge()} year old girl, and she has ${mona.driverLicence?'a':'no'} driving licence`);