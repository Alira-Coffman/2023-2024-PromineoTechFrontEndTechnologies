let CRUD_URL = "https://crudcrud.com/api/";
let CRUD_API = "9f24426c158045288c13c6022db80b18";
let resourceName = "/books2";

//function to create a book

function updateBook(id = "65e7e81a1d380403e8714a6c") {
	$.ajax({
		type: "PUT",
		url: CRUD_URL + CRUD_API + resourceName + `/${id}`,
		contentType: "application/json",
		data: JSON.stringify({ title: "test" }),
		success: function (data) {
			console.log("SUCCESS", data);
		},
		error: function (error) {
			console.error("Error", error);
		},
	});
}

function createBook(authorName, title) {
	//target by id in jquery
	// let title = $("#book-title").val();
	// let author = $("#book-author").val();

	let bookObject = {
		title: title,
		author: authorName,
	};

	console.log(bookObject);

	$.ajax({
		type: "POST",
		url: CRUD_URL + CRUD_API + resourceName,
		contentType: "application/json",
		data: JSON.stringify(bookObject),
		success: function (data) {
			console.log("SUCCESS", data);
		},
		error: function (error) {
			console.error("Error", error);
		},
	});
}

// createBook();

function searchBook() {
	//https://openlibrary.org/search.json?q=the+lord+of+the+rings
	let title = $("#book-title").val();
	$.ajax({
		type: "GET",
		url: `https://cors-anywhere.herokuapp.com/https://openlibrary.org/search.json?q=${title}`,
		contentType: "application/json",
		success: function (data) {
			console.log("SUCCESS", data?.docs[0]);
			createBook(data?.docs[0].author_name[0], data?.docs[0].title);
		},
		error: function (error) {
			console.error("Error", error);
		},
	});
}

function newBook() {
	let title = $("#book-title").val();
	console.log(title);
}

//to update a book

//to delete a book

//get a list of books
