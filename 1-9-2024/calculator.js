/**AGE CALCULATOR
 * Store your birth year in a variable.
 * Store a future year in a variable.
 * Calculate your 2 possible ages for that year based on the stored values.
For example, if you were born in 1988, then in 2026 you'll be either 37 or 38, 
 depending on what month it is in 2026.
 * Output them to the screen like so: "I will be either {NN} or {NN} in {YYYY}", substituting the values.
 */

let birthYear = 1900;
let futureYear = 2026;

let futureAgeOne = futureYear - birthYear;
let futureAgeTwo = ++futureAgeOne;
//
console.log(
	`I will be either ${futureAgeOne} or ${futureAgeTwo} in ${futureYear}`
);
console.log(
	"I will be either",
	futureAgeOne,
	"or",
	futureAgeTwo,
	"in",
	futureYear
);

console.log(
	"I will be either " +
		futureAgeOne +
		" or " +
		futureAgeTwo +
		" in " +
		futureYear
);
