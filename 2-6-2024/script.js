let person = {
	height: "5,4",
	name: "jane smith",
};

let car = {
	make: "ford",
	model: "ranger",
	go() {
		return "the car started";
	},
};
//blueprint
class Meal {
	constructor(food, drink) {
		this.food = food;
		// if (!drink) {
		// 	this.drink = "none";
		// } else
		this.drink = drink;
	}
	eat() {
		return "food is good";
	}
}

// let breakfast = new Meal("eggs", "milk");
// console.log(breakfast.food);
// console.log(breakfast.drink);
// console.log(breakfast.eat());

// let lunch = new Meal("soup");
// console.log(lunch.food);
// console.log(lunch.drink);
// console.log(lunch.eat());

//build a class called shape. color, number of sides

class Shape {
	constructor(color, num) {
		this.color = color;
		this.sides = num;
		console.log("SHAPE CLASS");
	}
}
class Circle extends Shape {
	constructor(r) {
		super("green", Infinity);
		this.radius = r;
		this.PI = 3.14159;
	}
	getArea() {
		return this.PI * this.radius * this.radius;
	}
	getDiameter() {
		return this.radius * 2;
	}
	getCircumference() {
		return this.PI * this.radius * 2;
	}
}

let circle1 = new Circle(3);
console.log("area of our circle", circle1.getArea());

//inheritance
//rectangle. l,w, inherit from shape

class Rectangle extends Shape {
	constructor(l, w) {
		//send info to the parent
		super("blue", 4);
		this.length = l;
		this.width = w;
		console.log("Rectangle Class");
	}
	getArea() {
		console.log("hello, i am in rectangle");
		return this.length * this.width;
	}
	//acessors
	getWidth() {
		return this.width;
	}
	//mutators
	newWidth(newWidth) {
		this.width = newWidth;
	}
}

let rect1 = new Rectangle(4, 3);
console.log(rect1.getArea());
console.log(rect1.color);

class Square extends Rectangle {
	constructor(s) {
		super(s, s);
		this.side = s;
		console.log("SQUARE");
	}
	getArea() {
		console.log("hello, i am in square");
		console.log(this.side * this.side);
	}
}

let square1 = new Square(4);
console.log(square1.color);
console.log(square1.getArea());

//cards: suit, value
//deck: 52 cards with 4 different suits and 13 values in each

class Cards {
	constructor(suit, value) {}
}

class Card {
	constructor(suit, value, pointsValue) {}
}
