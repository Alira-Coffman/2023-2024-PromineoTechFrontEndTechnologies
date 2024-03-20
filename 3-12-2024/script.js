let url = "https://65f10d2cda8c6584131cc485.mockapi.io/api/v1/users";
let userData = [];
$.ajax({
	type: "GET",
	url: url,
	async: false,
	success: function (data) {
		console.log(data);
		userData = data;
		return data;
	},
}).then((data) => data);

// $.get(url, function (data) {
// 	console.log(data);
// 	return data;
// });

console.log(userData[1]);

// setTimeout(() => {
// 	console.log(users[1]);
// }, 6000);
