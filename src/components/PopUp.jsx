import React, { Component } from "react";

function PopUp(props) {
	return (
		<React.Fragment>
			<p>Are you sure to Delete</p>
			<button className="btn-secondary" onClick={props.onCancel}>Cancel</button>
			<button className="btn-secondary" onClick={props.onDelete}>Delete</button>
		</React.Fragment>
	);
}

export default PopUp;
