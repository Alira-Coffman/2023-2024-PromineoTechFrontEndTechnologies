console.log(document);

console.log(document.body);

console.log(document.getElementsByTagName("p"));

console.log(document.getElementById("container-1"));

console.log(typeof document.getElementsByClassName("col"));

//text color of our cols be red
// document.getElementsByClassName("col")[0].style.color = "red";
// document.getElementsByClassName("col").map((el) => {
// 	el.style.color = "red";
// });

let columns = document.getElementsByClassName("col");

Array.from(columns).map((el) => {
	el.style.color = "red";
});

// for (let i = 0; i < document.getElementsByClassName("col").length; i++) {
// 	document.getElementsByClassName("col")[i].style.color = "red";
// }

//QUERY SELECTORS

console.log(document.querySelector("#container-1"));
console.log(typeof document.querySelectorAll(".col"));

//bg-primary, bg-info

//grab first link.
let link = document.getElementsByTagName("a")[0]; //an array
console.log(link);
link.classList.add("text-blue");

///grab button
let btnToggle = document.getElementById("toggle");

//add eventlistener - click :

btnToggle.addEventListener("click", function () {
	link.classList.toggle("text-blue");
});
//toggle class list

//grab div
let infoContainer = document.querySelector("#info");
console.log(infoContainer);
//add an element to the div

//create the element
let para = document.createElement("p");
//create the text node
let textNode = document.createTextNode("Hello World, How are you");

//append the text node to the paragraph
para.appendChild(textNode);
//append the paragraph to the div
infoContainer.appendChild(para);

let tableContainer = document.getElementById("people-tags");
let tableContainerBody = document.getElementById("people-tags-body");

function addRow() {
	//create tr
	let tr = document.createElement("tr");
	//create tds (insertCell, append, or other options)

	//create th
	//append tds, th to tr
	//append tr to table container body
}


// research .value