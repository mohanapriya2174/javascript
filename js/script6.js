"use strict";
const restaurant = {
  name: "Classico Italiano",
  address: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderCancel: function ({ starterIndex, mainIndex, address }) {
    console.log(
      `the order placed ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} from ${address}, is requested to cancel`
    );
  },
  orderFood: function (ing1, ing2, ing3) {
    console.log(`I wanna order ${ing1}, some ${ing2} and ${ing3}`);
  },
};
restaurant.orderCancel({
  starterIndex: 0,
  mainIndex: 1,
  address: "los vegas",
});

// const items = [
//   prompt("give your first order"),
//   prompt("second order"),
//   prompt("your third item plz!"),
// ];
// restaurant.orderFood(...items);
// const arr = [2, 4, 8];
// const [x, y, z] = arr;
// console.log(x, y, z);
// console.log(arr);

// let [main, , second] = restaurant.categories;
// console.log(main, second);
// const temp = main;
// main = second;
// second = temp;
// console.log(main, second);

//switching variables
// [main, second] = [second, main];
// console.log(main, second);

// console.log(restaurant.order(2, 0));

// const nested = [2, 5, [6, 7]];
// const [i, , j] = nested;
// console.log(i, j);
// const [a, , [b, c]] = nested;
// console.log(a, b, c);

// const { name, starterMenu, categories } = restaurant;
// console.log(name, categories, starterMenu);
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);
// console.log(0 && 3);
// console.log(6 && 3);

// const menus = [...restaurant.mainMenu, ...restaurant.starterMenu];
// for (const item of menus) {
//   console.log(item);
// }

// looping array for of
// for (const [i, el] of menus.entries()) {
//   console.log(i);
//   console.log(`${i + 1}: ${el}`);
// }
// console.log(...menus.entries());

const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

//  operational chinimg

for (const day of weekdays) {
  const open = openingHours[day]?.open ?? "no time";
  console.log(`it open on ${day} at ${open}`);
}
//methods
console.log(90 && 9);

console.log(restaurant.order?.(0, 1) || "no food");

const property = Object.keys(openingHours);
let openStr = `we are open for ${property.length} days:`;

for (const day of property) {
  openStr += `${day},`;
}
console.log(openStr);
// for keys

const entities = Object.entries(openingHours);
console.log(entities);
for (const [key, { open, close }] of entities) {
  console.log(`we are openned on ${key} from ${open} to ${close}`);
}
// //-------------------------------------------------||----------------------------------------------------------

// Coding Challenge #1

/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

*/

// const game = {
//   team1: "Bayern Munich",
//   team2: "Borrussia Dortmund",
//   players: [
//     [
//       "Neuer",
//       "Pavard",
//       "Martinez",
//       "Alaba",
//       "Davies",
//       "Kimmich",
//       "Goretzka",
//       "Coman",
//       "Muller",
//       "Gnarby",
//       "Lewandowski",
//     ],
//     [
//       "Burki",
//       "Schulz",
//       "Hummels",
//       "Akanji",
//       "Hakimi",
//       "Weigl",
//       "Witsel",
//       "Hazard",
//       "Brandt",
//       "Sancho",
//       "Gotze",
//     ],
//   ],
//   score: "4:0",
//   scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
//   date: "Nov 9th, 2037",
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
//   player1: [],
//   player2: [],
// };
// const [player1, player2] = game.players;
// console.log(player1);
// console.log(player2);
// const [goalKeeper, ...otherPlayer] = player1;
// console.log(goalKeeper, otherPlayer);
// const allPlayers = [...player1, ...player2];
// console.log(allPlayers);
// const players1Final = [...player1, "Thiago", "Coutinho", "Perisic"];
// console.log(players1Final);

// const {
//   odds: { team1, x: draw, team2 },
// } = game;
// console.log(team1, draw, team2);
// const totScored = function (...players) {
//   // console.log(players);
//   console.log(`${players.length} is the score`);
// };
// totScored("Davies", "Muller", "Lewandowski", "Kimmich");
// totScored(...game.scored);
// team1 < team2 && console.log(`team 1 is leading!!!`);
// // console.log( && 7);
//--------------------------------------------------------------------||||||||||||||-----------------------------------------------------
// Coding Challenge #2

/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }
*/
// const game = {
//   team1: "Bayern Munich",
//   team2: "Borrussia Dortmund",
//   players: [
//     [
//       "Neuer",
//       "Pavard",
//       "Martinez",
//       "Alaba",
//       "Davies",
//       "Kimmich",
//       "Goretzka",
//       "Coman",
//       "Muller",
//       "Gnarby",
//       "Lewandowski",
//     ],
//     [
//       "Burki",
//       "Schulz",
//       "Hummels",
//       "Akanji",
//       "Hakimi",
//       "Weigl",
//       "Witsel",
//       "Hazard",
//       "Brandt",
//       "Sancho",
//       "Gotze",
//     ],
//   ],
//   score: "4:0",
//   scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
//   date: "Nov 9th, 2037",
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };
// const needed = Object.entries(game.scored);
// console.log(needed);
// for (const [num, player] of needed) {
//   console.log(`Goal ${num}: ${player}`);
// }
// const avg = Object.values(game.odds);
// let add = 0;
// for (const i of avg) {
//   add = add + i;
// }
// console.log(add / avg.length);

// const odd = Object.entries(game.odds);
// console.log(odd);
// for (const [team, score] of odd) {
//   const neew = team === "x" ? "draw" : `vectory ${game[team]}`;

//   console.log(` Odd of ${neew}: ${score}`);
// }
// const scorers = {};
// for (const player of game.scored) {
//   scorers[player] ? scorers[player]++ : (scorers[player] = 1);
//   console.log(scorers);
//   console.log(player);
// }
// console.log(scorers);
// ----------------------------------------------------------//////////////////////////////-----------------------------------------------

// SETS
// EXAMPLE
// const staff = ["waiter", "cook", "waiter", "manager", "cook", "waiter"];
// const stsffSet = [...new Set(staff)];
// console.log(stsffSet);
// console.log(new Set("mohanapriya").size);
// console.log(new Set("nidhya").size);
// MAPS
const rest = new Map();
rest.set("name", "clasico itallina");
rest.set("1", "mexico");
rest.set("2", "porchigal");
console.log(
  rest.set("catogries", ["Italian", "Pizzeria", "Vegetarian", "Organic"])
);
rest
  .set("catogries", ["Italian", "Pizzeria", "Vegetarian", "Organic"])
  .set("open", 11)
  .set("close", 23)
  .set(true, "we are open :D")
  .set(false, "we are close :(");
console.log(rest.get("name"));
console.log(rest.get(true));
let time = 22;
console.log(rest.set(time > rest.get("open") && time < rest.set("close")));
console.log(rest.has("catagories"));
rest.delete("2");
console.log(rest);

const Quest = new Map([
  ["question", "what ia the best programming language?"],
  [1, "C"],
  [2, "java"],
  [3, "js"],
  ["correct", 3],
  [true, "correct😎😀"],
  [false, "take anathor try"],
]);
console.log(Quest);
// convert object to map
console.log(Object.entries(openingHours));

// map iteration
console.log(Quest.get("question"));
console.log();
for (const [key, value] of Quest) {
  if (typeof key === "number") console.log(`Answer ${key}:${value}`);
}
//const ans = Number(prompt("your ans"));
const ans = 3;
console.log(ans);
if (ans === Quest.get("correct")) {
  console.log(Quest.get(true));
}
console.log(Quest.get(ans === Quest.get("correct")));
// convert map to arrrey
console.log(...Quest);
console.log(...Quest.entries());
console.log(...Quest.keys());
console.log(...Quest.values());

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/

// const gameEvents = new Map([
//   [17, "⚽️ GOAL"],
//   [36, "🔁 Substitution"],
//   [47, "⚽️ GOAL"],
//   [61, "🔁 Substitution"],
//   [64, "🔶 Yellow card"],
//   [69, "🔴 Red card"],
//   [70, "🔁 Substitution"],
//   [72, "🔁 Substitution"],
//   [76, "⚽️ GOAL"],
//   [80, "⚽️ GOAL"],
//   [92, "🔶 Yellow card"],
// ]);
// //1
// const events = gameEvents.values();
// const eventSet = [...new Set(events)];
// console.log(eventSet);

// //2
// gameEvents.delete(64);
// console.log(gameEvents);

// //3
// console.log(
//   `An event happened, on average, every ${90 / gameEvents.size} minutes`
// );
// //4
// for (const [keys, values] of gameEvents) {
//   if (keys <= 45) {
//     console.log(`[FIRST HALF] ${keys}:${values}`);
//   } else {
//     console.log(`[SECOND HALF] ${keys}: ${values}
// `);
//   }
// }

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

const airline = "Air India";
const plane = "A40B6";
console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log("b34g3"[0]);
console.log(airline.length);
console.log(airline.indexOf("n"));
console.log(airline.lastIndexOf("i"));
console.log(airline.indexOf("India"));
console.log(airline.slice(3));
console.log(airline.slice(3, 6));
console.log(airline.slice(0, airline.indexOf(" ")));
console.log(airline.slice(airline.indexOf(" ") + 1));
console.log(airline.slice(-2));
console.log(airline.slice(0, -2));

const checkMiddleSeat = function (seat) {
  // B and E are middle seats in a plain
  const s = seat.slice(-1);
  if (s === "B" || s === "E") {
    console.log("Middle seat");
  } else {
    console.log("not a middle seat");
  }
};
checkMiddleSeat("11B");
checkMiddleSeat("1E");
checkMiddleSeat("45C");
console.log(new String("mona"));
console.log(typeof new String("mona"));
const passengerName = "moNA";
const passengerLower = passengerName.toLocaleLowerCase();
const passengerCorrect =
  passengerLower[0].toLocaleUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

const announcement =
  "All passengers are requested to come to the boarding door and the door gonna colse soon!!";
console.log(announcement.replace("door", "gate"));
//console.log(announcement.replaceAll("door", "gate"));
console.log(announcement.replace(/door/g, "gate"));
console.log(["mohanapriya s"]);
//pading
const creditCard = function (number) {
  const str = number + "";
  const last = str.slice(-4);
  return last.padStart(str.length, "*");
};
console.log(creditCard("765496321374"));
console.log(creditCard("15632902276894098477643"));
//repeat
const message2 = "bad weather....... All sepature delay....";
console.log(message2.repeat(5));
const plainesInLine = function (n) {
  console.log(`There are ${n} planes in line ${"✈".repeat(n)}`);
};
plainesInLine(10);

// Coding Challenge #4

/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/

// document.body.append(document.createElement("textarea"));
// document.body.append(document.createElement("button"));

// document.querySelector("button").addEventListener("click", function () {
//   const text = document.querySelector("textarea").value;
//   const rows = text.split("\n");
//   for (const [i, row] of rows.entries()) {
//     const [first, second] = row.toLowerCase().trim().split("_");
//     console.log(row, first, second);

//     const output = `${first}${second.replace(
//       second[0],
//       second[0].toUpperCase()
//     )}`;
//     console.log(`${output.padEnd(20)}${"✅".repeat(i + 1)}`);
//   }
// });
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

const rows = flights.split("+");
console.log(rows);
for (const [i, row] of rows.entries()) {
  const [sentence, from, tohour, mins] = row.trim().split(";");
  // console.log(sentence, from, tohour, mins);
  const [first, second, third] = sentence.trim().split("_");
  // console.log(first, second, third);
  const [hour, min] = mins.trim().split(":");
  let output = "";
  if (i % 2 == 0) {
    output = `${"🔴"} ${second} ${third} fron ${from
      .slice(0, 2)
      .toUpperCase()} to ${tohour
      .slice(0, 2)
      .toLocaleUpperCase()} (${hour}h${min})`;
  } else {
    output = `${second} fron ${from.slice(0, 2).toUpperCase()} to ${tohour
      .slice(0, 2)
      .toLocaleUpperCase()} (${hour}h${min})`;
  }
  // console.log(output);
  if (i % 2 == 0) console.log(`${output.padStart(42, " ")}`);
  else {
    console.log(`${output.padStart(41, " ")}`);
  }
}
