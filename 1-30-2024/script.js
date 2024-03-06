// {
// 	var y = 7;
// }

// const x = 8;

// var h = `hello world,
// I am ${x} years old`;

// // var h = "hello world, \nI am ${x} years old";

// console.log("x is ", x, " y is ", y);
// console.log(`x is ${x + y} y is ${y}`);
// console.log(h);

// let ave = (params) => {
// 	console.log("i am an arrow function");
// 	return 7;
// };

//explicit
let a = (b) => {
	return b;
};

console.log(a(2));

//implicit
let c = (d) => d;

console.log(c(4));

console.log("starting here");

// setTimeout(function bake() {
// 	console.log("i am done");
// }, 3000);

// console.log("test");

// let pokemon = fetch("https://pokeapi.co/api/v2/pokemon/ditto")
// 	.then((response) => {
// 		return response.json();
// 	})
// 	.catch(() => {
// 		console.log("error");
// 	});

// let pokemon = fetch("https://pokeapi.co/api/v2/pokemon/ditto")
// 	.then((response) => {
// 		return response.json();
// 	})
// 	.then((data) => {
// 		console.log(data); // Now 'data' contains the response data.
// 		return data;
// 	})
// 	.catch(() => {
// 		console.log("error");
// 	});

let names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];

let totalCount = names.reduce((charCount, name) => {
	return charCount + name.length;
}, 0);

console.log(totalCount / names.length);
