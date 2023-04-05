import React, { Component } from "react";

const NavBar = (props) => {
	//({totalCount})
	return (
		<nav className="navbar bg-light">
			<div className="container-fluid">
				<a className="navbar-brand" href="#">
					Navbar
				</a>
				<span className="badge  badge-pill badge-secondary">
					{props.totalCount} {/*totalCount*/}
				</span>
			</div>
		</nav>
	);
};

export default NavBar;
