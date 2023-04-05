import React, { Component } from "react";
import Backdrop from "@mui/material/Backdrop";

function BackDrop(props) {
	return (
		<React.Fragment>
			<Backdrop
				sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
				open={props.showBackDrop}
			>
				{props.children}
			</Backdrop>
		</React.Fragment>
	);
}

export default BackDrop;
