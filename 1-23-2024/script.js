// // (5 === 4) && ( 4 == 4) //false
// // 5 == '5' //true
// // 5 === '5' //false

// // ( 10 > 11) || (5 < 10) //true

// // let x = "frog" && "bug";
// // console.log(x);
// function printArray(arr) {
// 	for (let i = 0; i < arr.length; i++) {
// 		console.log(arr[i]);
// 	}
// }
// // let x = 4;

// // if (x % 2 == 0) {
// // 	console.log("this is even");
// // } else if (x % 2 != 0) {
// // 	console.log("this is odd");
// // }

// // //condition ? true : false
// // console.log(x % 2 == 0 ? "this is even" : "this is odd");

// function isNumberOdd(num) {
// 	// if (num % 2 == 0) {
// 	// 	return false;
// 	// } else {
// 	// 	return true;
// 	// }
// 	return num % 2 != 0 ? true : false;
// }
// let x = 4;
// if (isNumberOdd(x)) {
// 	console.log("number is odd");
// } else {
// 	console.log("number is even");
// }

// let y = 7;
// let result = isNumberOdd(y);
// console.log(result);

// // let currentDay = new Date().getDay();
// // console.log(currentDay);

// //change 2 to tuesday

// // switch (currentDay) {
// // 	case 0:
// // 		console.log("sunday");
// // 		break;
// // 	case 1:
// // 		console.log("monday");
// // 		break;
// // 	case 2:
// // 		console.log("tuesday");
// // 		break;
// // 	default:
// // 		console.log("what is happen?");
// // }

// //for,while,do-while

// //this is an infinite loop. dont run this
// // for (let i = 10; i >= 10; i++) {
// // 	console.log(i);
// // }

// //ask user for their name. name jeff
// // do {
// // 	var name = prompt("whats your name?");
// // } while (name != "jeff");

// let names = ["jeff", "john", "don", "basil"];

// // //how do I output john? []
// // console.log(names[1]);

// // //basil
// // console.log(names[3]);

// //for loops, print every name without using int, i want to use 'i'

// // for (let i = 0; i < names.length; i++) {
// // 	console.log(names[i]);
// // }

// //change value of john to jim.

// names[1] = "jim";

// printArray(names);

// // //add mary to array

// // names.push("mary");
// // for (let i = 0; i < names.length; i++) {
// // 	console.log(names[i]);
// // }

// // let twoDExample = [["a", "b", "c"], names, [7, 6, 5.5]];

// // for (let i = 0; i < twoDExample.length; i++) {
// // 	for (let j = 0; j < twoDExample[i].length; j++) {
// // 		console.log(twoDExample[i][j]);
// // 	}
// // }

function getCost(amount, calculateTax) {
	return amount + calculateTax;
}

// let value = getCost(19.99, function (total) {
// 	return total * 0.055;
// });

let value = getCost(19.99, (total) => total * 0.055);
// console.log(value);

///

//arrow function
let sum = (a, b) => a + b;

console.log(sum(1, 2));
console.log(sum(sum(1, 2), sum(4, 5)));

//map

let names = ["jeff", "john", "don", "basil"];

let students = names.map((name) => console.log(name));

let reduceExample = names.reduce((prev, current) => prev + " " + current);
console.log(reduceExample);

const numbers = [1, 2, 3, 5, 6, 7, 8, 9];

let sumAllNumbers = numbers.reduce((acc, current) => acc + current);
console.log(sumAllNumbers);

let jeff = names.filter(function (name) {
	return name == "jeff";
});
console.log(jeff);

let evenNumbers = numbers.filter((num) => num % 2 == 0);
console.log(evenNumbers);

const fruits = ["apple", "orange", "banana"];

let eatingFruit = fruits.forEach((fruit, index) => {
	console.log(`${index} - ${fruit}`); //template literal
	console.log(index + " - " + fruit);
});

//splice vs slice

let removed = fruits.splice(2, 2, "lemon");
console.log(removed);
console.log(fruits.length);
console.log(fruits);

let car = {
	model: "ford",
	make: "ranger",
	year: 2012,
	printCarInfo: function () {
		console.log("I am a " + this.model + " " + this.make);
	},
};
car.printCarInfo();
