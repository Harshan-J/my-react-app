import React, { Component } from "react";
import PopUp from "./PopUp";
import BackDrop from "./BackDrop";

class MyComponent extends Component {
	state = {
		name: "Peter",
		myList: [],
		isDeleteClicked: false,
	};

	style = {
		color: "red",
	};

	// constructor() {
	// 	super();
	// 	this.clickHandler = this.clickHandler.bind(this);
	// }

	render() {
		const { item, onIncrement, onDelete } = this.props;
		return (
			<React.Fragment>
				<span style={this.style} className={this.getLabelClasses()}>
					{this.getName()}
				</span>
				{this.state.myList.length === 0 && "Add a value."}
				{this.getUIList()}
				{item.value}
				{console.log(this.props)}
				{this.props.testFunction("bb")}
				<button
					onClick={() => onIncrement(item)}
					style={{ backgroundColor: "pink" }}
					className="btn btn-secondary btn-sm"
				>
					Click me
				</button>
				{/* <button onClick={() => this.clickHandler2({ id: 55 })}>Click me</button> */}
				<button
					onClick={() => this.props.onDelete(item.id)}
					className="btn btn-danger btn-sm m-2"
				>
					Delete
				</button>
				<button className="btn-danger btn-sm m-2" onClick={this.showPopUp}>
					DeleteTest
				</button>
				<BackDrop showBackDrop={this.state.isDeleteClicked}>
					<PopUp onDelete={() => this.deleteHandler(item.id)} onCancel={this.cancelHandler}/>
				</BackDrop>
			</React.Fragment>
		);
	}

	// clickHandler = (event) => {
	// 	this.state.count++;
	// 	console.log("test", this, event.target);
	// };

	// clickHandler2 = (product) => {
	// 	console.log(product);
	// 	this.setState({ count: this.state.count });
	// };

	cancelHandler = () => {
		this.hidePopUp();
	}

	deleteHandler = (id) =>
	{
		this.hidePopUp();
		this.props.onDelete(id)
	}

	hidePopUp = () => {
		this.setState({ isDeleteClicked: false });
	};

	showPopUp = () => {
		this.setState({ isDeleteClicked: true });
	};

	getUIList() {
		if (this.state.myList.length === 0) return <p>No elements in the list.</p>;
		return (
			<ul>
				{this.state.myList.map((c) => (
					<li key={c}>{c}</li>
				))}
			</ul>
		);
	}

	getLabelClasses() {
		let classes = "label label-";
		classes += this.state.name === "Peter" ? "warning" : "info";
		return classes;
	}

	getName() {
		const { name } = this.state;
		return name === "Peter" ? <b>{name}</b> : name;
	}
}

export default MyComponent;
