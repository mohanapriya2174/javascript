"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = "";

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;
  movs.forEach(function (mov, i) {
    const type = mov > 0 ? "deposit" : "withdrawal";
    const html = `
     <div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
          <div class="movements__value">${mov}€</div>
      </div>`;
    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};

const createUserName = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(" ")
      .map(function (name) {
        return name[0];
      })
      .join("");
  });
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter((mov) => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const out = acc.movements
    .filter((mov) => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = acc.movements
    .filter((mov) => mov > 0)
    .map((deposit) => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}€`;
};

createUserName(accounts);
console.log(accounts);

const calDisplayBal = function (acc) {
  acc.balance = acc.movements.reduce(function (acc, mov) {
    return acc + mov;
  }, 0);
  labelBalance.textContent = `${acc.balance}€`;
};

const updateUI = function (acc) {
  //Display movements
  displayMovements(currentAccount.movements);
  //dispaly balance
  calDisplayBal(currentAccount);
  //display summary
  calcDisplaySummary(currentAccount);
  console.log("login");
};

//Event handeller
let currentAccount;
btnLogin.addEventListener("click", function (e) {
  e.preventDefault();
  currentAccount = accounts.find(
    (acc) => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // display ui and welcome
    labelWelcome.textContent = `Welconme back, ${
      currentAccount.owner.split(" ")[0]
    }`;
    containerApp.style.opacity = 100;
    //clear input fields
    inputLoginUsername.value = inputLoginPin.value = "";
    inputClosePin.blur();
    //updateUI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener("click", function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const reciverAcc = accounts.find(
    (acc) => acc.username === inputTransferTo.value
  );
  console.log(amount, reciverAcc);

  if (
    amount > 0 &&
    reciverAcc &&
    currentAccount.balance >= amount &&
    reciverAcc?.username !== currentAccount.username
  ) {
    console.log("transfer");
    //ding the transfer
    currentAccount.movements.push(-amount);
    reciverAcc.movements.push(amount);

    //updateUI
    updateUI(currentAccount);
  }
  inputTransferAmount.value = inputTransferTo.value = "";
  inputTransferAmount.blur();
});

btnLoan.addEventListener("click", function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if (
    amount > 0 &&
    currentAccount.movements.some((mov) => mov >= amount * 0.1)
  ) {
    // add movement
    currentAccount.movements.push(amount);
    //update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = "";
  inputLoanAmount.blur();
});

btnClose.addEventListener("click", function (e) {
  e.preventDefault();

  if (
    currentAccount.username === inputCloseUsername.value &&
    currentAccount.pin === Number(inputClosePin.value)
  ) {
    const index = accounts.findIndex(
      (acc) => acc.username === currentAccount.username
    );
    //delet account
    accounts.splice(index, 1);
    //hide UI
    containerApp.style.opacity = 0;
  }
  inputCloseUsername.value = inputClosePin.value = "";
});

let sorted = false;
btnSort.addEventListener("click", function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});
//event listner

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ["USD", "United States dollar"],
//   ["EUR", "Euro"],
//   ["GBP", "Pound sterling"],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// /////////////////////////////////////////////////
// for (const [i, movement] of movements.entries()) {
//   if (movement > 0) {
//     console.log(`Movement ${i + 1}: you deposited ${movement}`);
//   } else {
//     console.log(`Movement ${i + 1}: you withdrawed ${Math.abs(movement)}`);
//   }
// }
// console.log("---------FOREACH----------");
// movements.forEach(function (movement, i, arr) {
//   if (movement > 0) {
//     console.log(`Movement ${i + 1}: you deposited ${movement}`);
//   } else {
//     console.log(`Movement ${i + 1}: you withdrawed ${Math.abs(movement)}`);
//   }
// });

// currencies.forEach(function (value, key, map) {
//   console.log(`${key}:${value}`);
// });
// const currency = new Set(["USD", "INR", "EUR", "EUR", "USD", "GBP"]);
// console.log(currency);
// currency.forEach(function (value, key, set) {
//   console.log(`${key}:${value}`);
// });
// Coding Challenge #1

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [3, 5, 2, 12, 7]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

// const juliData1 = [3, 5, 2, 12, 7];
// const cateData1 = [4, 1, 15, 8, 3];
// const juliData2 = [9, 16, 6, 8, 3];
// const cateData2 = [10, 5, 6, 1, 4];
// const juliDatacorr1 = juliData1.splice(1, juliData1.length - 3);
// const juliDatacorr2 = juliData2.splice(1, juliData2.length - 3);
// console.log(juliDatacorr1);
// const ageCheck = function (age) {
//   age.forEach(function (ages, i) {
//     const check = ages > 3 ? "an adult" : " still a puppy";
//     console.log(`Dod number ${i + 1} is ${check}, and its ${ages} years old`);
//   });
// };
// ageCheck(juliDatacorr1);
// ageCheck(juliDatacorr2);
// ageCheck(cateData1);
// ageCheck(cateData2);

// const agecheck = function (juliaDogs, cateDogs) {
//   const juliDogsCrr = juliaDogs.splice(1, juliaDogs.length - 3);
//   console.log(juliDogsCrr);
//   const dogs = juliDogsCrr.concat(cateDogs);
//   dogs.forEach(function (ages, i) {
//     const check = ages > 3 ? "an adult" : " still a puppy";
//     console.log(`Dod number ${i + 1} is ${check}, and its ${ages} years old`);
//   });
// };
// agecheck([3, 5, 2, 12, 7], [3, 5, 2, 12, 7]);
// agecheck([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const withdraeles = movements.filter(function (mov) {
//   return Math.abs(mov < 0);
// });
// console.log(withdraeles);

// // const balance = movements.reduce(function (acc, mov, i, arr) {
// //   return acc + mov;
// // }, 0);
// // console.log(balance);

// // coding challenge3
// const calcAverageHumanAge = (ages) =>
//   ages
//     .map((age) => (age <= 2 ? 2 * age : 16 + age * 4))
//     .filter((age) => age >= 18)
//     .reduce((acc, age, i, arr) => acc + age / arr.length, 0);
// // adults.length
// const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
// console.log(avg1, avg2);
// const inputval = prompt("enter number");
// const firstWithdrawel = account1.movements.find((mov) => mov == inputval);
// console.log(firstWithdrawel);

// const firstWithdrawel1 = account1.movements.findIndex((mov) => mov == inputval);
// console.log(firstWithdrawel1);
const movements = account1.movements;
console.log(movements);
console.log(movements.includes(-130));

const anydeposit = movements.some((mov) => mov > 1500);
console.log(anydeposit);

//every
console.log(account4.movements.every((mov) => mov > 0));

//flat
const accMov = accounts.map((acc) => acc.movements);
console.log(accMov);
const allMov = accMov.flat();
console.log(allMov);
const sumup = allMov.reduce((acc, i, arr) => acc + i, 0);
console.log(sumup);

const accMov2 = accounts
  .map((acc) => acc.movements)
  .flat()
  .reduce((acc, i, arr) => acc + i, 0);
console.log(sumup);

//flatmap
//same as flat but it combains the opration od both map and flat
const accMov3 = accounts
  .flatMap((acc) => acc.movements)
  .reduce((acc, i, arr) => acc + i, 0);
console.log(sumup);
//sort

// alphabets
// console.log(movements);
// // this wont work because it considers the number as the stringd
// console.log(movements.sort());

// // Numbers
// console.log(movements);
// // return < 0, A, B (keep order)
// // return > 0, B, A (switch order)
// //Ascending
// movements.sort((a, b) => {
//   if (a > b) return 1;
//   if (a < b) return -1;
// });
// console.log(movements);
// movements.sort((a, b) => a - b);
// console.log(movements);
// // Descending
// movements.sort((a, b) => {
//   if (a > b) return -1;
//   if (a < b) return 1;
// });
// console.log(movements);
// movements.sort((a, b) => b - a);
// console.log(movements);

//fill method
let m = [1, 2, 3, 4, 5, 6];
let r = 3;
let n = new Array(7);
console.log(n);
n.fill(1, 3, 5);
console.log(n);
m.fill(23, 4, 6);
console.log(m);

//Array.from method
const y = Array.from({ length: 7 }, () => 1);
console.log(y);

const z = Array.from({ length: 7 }, (cur, i) => i + 1);
console.log(z);

//Real application of Array.from
const movementsUI = Array.from(document.querySelectorAll(".movements__value"));
console.log(movementsUI);
labelBalance.addEventListener("click", function () {
  const movementsUI = Array.from(
    document.querySelectorAll(".movements__value")
  );
  console.log(movementsUI.map((el) => el.textContent.replace("€", "")));
  console.log(movementsUI);
});
