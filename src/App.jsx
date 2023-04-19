import "./App.css";
import React, { Component } from "react";
import Parent from "./components/Parent";
import StatusBar from "./components/StatusBar";
import BackDrop from "./components/BackDrop";
import PopUp from "./components/PopUp";

class App extends Component {
  state = {
    items: [
      { id: 1, value: 44 },
      { id: 2, value: 5 },
      { id: 3, value: 4 },
      { id: 4, value: 3 },
      { id: 5, value: 2 },
    ],
  };
  render() {
    return (
      <React.Fragment>
        <StatusBar
          totalCount={
            this.state.items.length > 0 &&
            this.state.items.filter((c) => c.value > 0).length
          }
        />
        <main className="container">
          <Parent
            items={this.state.items}
            onDelete={this.handleDelete}
            onUpdateStatus={this.updateState}
            onPrintState={this.printState}
            onIncrement={this.handleIncrementCount}
            onReset={this.resetCount}
          />
        </main>
        {this.state.items.length > 0 && this.state.items[0].value}
      </React.Fragment>
    );
  }

  handleDelete = (id) => {
    console.log("test", id);
    const items = this.state.items.filter((c) => c.id !== id);
    this.setState({ items }); //this.setState({ items: items });
  };

  handleIncrementCount = (item) => {
    if (!this.state.items.length != 0) return;
    const items = [...this.state.items];
    const index = items.indexOf(item);
    items[index] = { ...item };
    items[index].value++;
    this.setState({ items });
    console.log(this.state);
    console.log(items);
    //this.props.onPrintState();
    //this.props.onUpdateStatus(); //Update parent state
  };

  updateState = () => {
    const items = this.state.items;
    this.setState({ items });
  };

  printState = () => {
    console.log(this.state.items);
  };

  resetCount = () => {
    const items = this.state.items.map((c) => {
      c.value = 0;
      return c;
    });

    this.setState({ items });
  };
}

export default App;
