import MyComponent from "./myComponent";
import React, { Component } from "react";

class Parent extends Component {
	render() {
		return (
			<React.Fragment>
				<button
					onClick={this.resetCount}
					className="btn btn-primary btn-sm m-2"
				>
					Reset
				</button>
				{this.props.items.map((item) => (
					<MyComponent
						key={item.id}
						item={item}
						onDelete={this.props.onDelete}
						onIncrement={this.props.onIncrement}
						testFunction={this.testFunction}
					/>
				))}
				{this.props.items[0].value}
			</React.Fragment>
		);
	}

	testFunction(value) {
		return <h1>test haha {value}</h1>;
	}
	resetCount = () => {
		const items = this.props.items.map((c) => {
			c.value = 0;
			return c;
		});

		this.setState({ items });
	};
}

export default Parent;
