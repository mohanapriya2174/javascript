// "use strict";
// let flight = "LH21S";
// const mona = {
//   name: "mohanapriya",
//   passportNo: 234561789,
// };
// const checkIn = function (flightNum, passenger) {
//   //flight num is a copy so changes at this value will not reflect in outside values
//   flightNum = "LH999";
//   passenger.name = "Ms " + passenger.name;
//   if (passenger.passportNo === 234561789) {
//     alert("check-in");
//   } else {
//     alert("wrong passprot");
//   }
// };
// checkIn(flight, mona); //primitive type
// console.log(flight); // "when we pass a reference type for a function here the reference is alone copied"
// console.log(mona);

// const newpassport = function (person) {
//   person.passportNo = Math.trunc(Math.random * 10000000000);
// };
// newpassport(mona);
// checkIn(flight, mona);

const oneWord = function (str) {
  return str.replace(/ /g, "").toLowerCase();
};
const upperFistWord = function (str) {
  const [first, ...rest] = str.split(" ");
  return [first.toUpperCase(), ...rest].join(" ");
};

const transform = function (str, fn) {
  console.log(`the original string: ${str}`);
  console.log(`the transformed string: ${fn(str)}`);
};
transform("javaScript is my fav", upperFistWord);
transform("javaScript is my fav", oneWord);

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};
const Sentence = greet("heyy");
Sentence("mohana");
Sentence("fransis");
greet("helloo")("sangaa");

const greets = (greetings) => (names) => console.log(`${greetings} ${names}`);
greets("how r u")("meena");

const airIndia = {
  airline: "AirIndia",
  intaCode: "AI",
  booking: [],
  book(flightNo, name) {
    console.log(
      `${name} booked a seet on ${this.airline} flight ${this.intaCode}${flightNo}`
    );
    this.booking.push({ flight: `${this.intaCode}${flightNo}`, name });
  },
};

airIndia.book(123, "mona");
console.log(airIndia.booking);
const tataAirline = {
  name: "TataAirline",
  intaCode: "TA",
  booking: [],
};
const book = airIndia.book;

//this wont work because this will point like a regular function call and this keyword would point to undefined
//book(456, "sanga");
book.call(tataAirline, 789, "meera");
console.log(tataAirline);
const detail = [33, "aarthi"];
book.apply(tataAirline, detail);
console.log(tataAirline.booking);

airIndia.planes = 200;
airIndia.buyPlane = function () {
  this.planes++;
  console.log(this);
  console.log(this.planes);
};
//now here in this code the this in event handeller function it denotes where the event happens thus we need to add any of call,apply or bind
//document.querySelector(".buy").addEventListener("click", airIndia.buyPlane);
//in this case we domt want to call the function thus bind would be the right choice
document
  .querySelector(".buy")
  .addEventListener("click", airIndia.buyPlane.bind(airIndia));

/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/

const poll = {
  question: "What is your favourite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
  // This generates [0, 0, 0, 0]. More in the next section 😃
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    // Get answer
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join("\n")}\n(Write option number)`
      )
    );
    if (typeof answer === "number" && answer < this.answers.length) {
      this.answers[answer]++;
    }
    this.displayResults();
    this.displayResults("string");
  },
  displayResults(type = "array") {
    if (type == "array") {
      console.log(this.answers);
    } else {
      console.log(`poll results are${this.answers.join(", ")}`);
    }
  },
};
poll.registerNewAnswer();
document
  .querySelector(".poll")
  .addEventListener("click", poll.registerNewAnswer.bind(poll));
//BONUS TEST DATA 1: [5, 2, 3]
//BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]
poll.displayResults.call({ answers: [5, 2, 3] });
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] });
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, "string");

//immeditly invoked function
(function () {
  console.log("this will not run again");
})();
//closure
const secureBooking = function () {
  let passengerCount = 0;
  passengerCount++;
  console.log(`${passengerCount}`);
  // return function () {
  //   passengerCount++;
  //   console.log(`${passengerCount}`);
  //};
};
const booker = secureBooking;
booker();
booker();
document.querySelector("h1").style.color = "pink";
(function () {
  const header = document.querySelector("h1");
  header.style.color = "red";

  document.querySelector("body").addEventListener("click", function () {
    header.style.color = "blue";
  });
})();
