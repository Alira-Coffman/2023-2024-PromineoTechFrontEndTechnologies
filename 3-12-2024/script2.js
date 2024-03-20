//reverse a string with a loop
//?questions: what if the string is empty?
let string = "Hello World";

//check when string is a
//racecar
//tacocat
let pal1 = "racecare";
let reverseString = "";
// for (let i = pal1.length - 1; i >= 0; i--) {
// 	reverseString += pal1[i];
// }
// if (pal1 == reverseString) console.log("true");

//track from last character downward.
let lastIndex = pal1.length - 1;
for (let i = 0; i < pal1.length / 2; i++, lastIndex--) {
	if (pal1[i] != pal1[lastIndex]) console.log("not true");
}
