import React from "react";

///CREATE ELEMENT
// export class AddButton extends React.Component {
// 	render() {
// 		return React.createElement(
// 			"button",
// 			{
// 				className: "btn btn-primary",
// 			},
// 			"Add"
// 		);
// 	}
// }

///USING JSX
export class AddButton extends React.Component {
	render() {
		return (
			<div>
				<span>+</span>
				<button className="btn btn-primary">Add</button>
			</div>
		);
	}
}
