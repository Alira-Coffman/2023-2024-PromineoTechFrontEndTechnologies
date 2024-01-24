import React from "react";

export class Car extends React.Component {
	render() {
		return (
			<>
				<div className="border border-danger">
					<span>Owner: {this.props.owner}</span>
					<br />
					<span>{/* {Cars[0].model} {Cars[0].year} */}</span>
				</div>
			</>
		);
	}
}
