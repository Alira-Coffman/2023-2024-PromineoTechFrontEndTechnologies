//$() -> jquery

// console.log($(".intro").text());

//create function display the values of our two selections

function displayValuesOfSelect() {
	//get the select value

	//get the elements
	//fav-color
	var favoriteColor = $("#fav-color").val();
	let favoriteMovie = $("#fav-movie").val(); //array

	//add a node to the html

	// $("#favorites").append(
	// 	"<br><b>Favorite Choices</b>" + favoriteColor + favoriteMovie
	// );

	// var existingHTML = $("#favorites").html();
	// $("#favorites").html(
	// 	existingHTML + "<br><b>Favorite Choices</b>" + favoriteColor + favoriteMovie
	// );

	$("#choices-container")
		.toggleClass("red")
		.html("<br><b>Favorite Choices</b>" + favoriteColor + favoriteMovie);
	console.log("in function");
}

$(document).on("change", "select", displayValuesOfSelect);
// displayValuesOfSelect();
//"fbc90b18edfe4340"
$.ajax({
	url: "https://randomuser.me/api/?page=3&results=10",
	dataType: "json",
	success: function (data) {
		console.log(data);
		displayRandomUsers(data?.results);
	},
});

$.ajax({
	url: "https://pokeapi.co/api/v2/pokemon/ditto",
	dataType: "json",
	success: function (data) {
		console.log(data?.sprites?.back_default);

		$("#pokemon-profile").html(`<img src='${data?.sprites?.back_default}' />`);
	},
});

function displayRandomUsers(data) {
	console.log("new data", data);
	//create a row for each user.

	let userRows = "";

	for (let i = 0; i < data.length; i++) {
		userRows += `<tr><td>${data[i].name.first}</td></tr>`;
	}

	$("#rand-user-table").html(`<table>${userRows} </table>`);
}
