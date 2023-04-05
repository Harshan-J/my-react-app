import React, { Component } from "react";

function PopUp() {
	return (
		<React.Fragment>
			<p>Are you sure to Delete</p>
			<button className="btn-secondary">Cancel</button>
			<button className="btn-secondary">Delete</button>
		</React.Fragment>
	);
}

export default PopUp;
