import React, { Component } from "react";
import "./styles.css";
import ReactBootstrap from "react-bootstrap";

//Adding Dynamic data to app

export class TodoCreater extends Component {
  constructor(props) {
    super(props);
    this.state = { newItem: "" };
  }

  updateNewTodoValue = event => {
    this.setState({ newItem: event.target.value });
  };

  createNewTodo = () => {
    this.props.callback(this.state.newItem);
    this.setState({ newItem: "" });
  };

  render = () =>
    <div className="my-1">
      <input
        className="form-control"
        value={this.state.newItem}
        onChange={this.updateNewTodoValue}
      />

      <button className="btn btn-primary mt-1" onClick={this.createNewTodo}>
        Add ToDo!
      </button>
    </div>
}
