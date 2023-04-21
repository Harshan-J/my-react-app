import axios from "axios";
import React, { Component } from "react";
class CurdTestForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: [],
      name: "",
      fid: "",
      notes: "",
    };
    this.create = this.create.bind(this);
    this.update = this.update.bind(this);
    this.delete = this.delete.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    // get all entities - GET
  }
  addFriend() {
    axios
      .post("http://localhost:3030/friends", {
        friendName: this.state.name,
        friendNote: this.state.notes,
        friendId: this.state.fid,
      })
      .then((response) => {
        console.log(response.data);
        const friends = [...this.state.friends];
        friends.push({
          name: response.data.friendName,
          fid: response.data.friendId,
          notes: response.data.friendNote,
          id: response.data.id,
        });
        this.setState({
          friends,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }
  create(e) {
    // add entity - POST
    this.addFriend();
    e.preventDefault();
  }
  update(e) {
    // update entity - PUT
    e.preventDefault();
  }
  delete(e) {
    // delete entity - DELETE
    e.preventDefault();
  }
  handleChange(changeObject) {
    this.setState(changeObject);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState !== this.state) {
      console.log(this.state);
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <form className="d-flex flex-column">
              <legend className="text-center">Add-Update-Delete Friend</legend>
              <label htmlFor="name">
                Friend Name:
                <input
                  name="name"
                  id="name"
                  type="text"
                  className="form-control"
                  value={this.state.name}
                  onChange={(e) => this.handleChange({ name: e.target.value })}
                  required
                />
              </label>
              <label htmlFor="notes">
                Friend notes:
                <input
                  name="notes"
                  id="notes"
                  type="test"
                  className="form-control"
                  value={this.state.notes}
                  onChange={(e) => this.handleChange({ notes: e.target.value })}
                  required
                />
              </label>
              <label htmlFor="id">
                Friend ID:
                <input
                  name="id"
                  id="id"
                  type="text"
                  className="form-control"
                  value={this.state.id}
                  onChange={(e) => this.handleChange({ fid: e.target.value })}
                />
              </label>
              <button
                className="btn btn-primary"
                type="button"
                onClick={(e) => this.create(e)}
              >
                Add
              </button>
              <button
                className="btn btn-info"
                type="button"
                onClick={(e) => this.update(e)}
              >
                Update
              </button>
              <button
                className="btn btn-danger"
                type="button"
                onClick={(e) => this.delete(e)}
              >
                Delete
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default CurdTestForm;
