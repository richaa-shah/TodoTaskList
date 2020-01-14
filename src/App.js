import React, { Component } from "react";
import "./styles.css";
import ReactBootstrap from "react-bootstrap";

//Adding Dynamic data to app

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "Richa",
      toDoTasks: [
        { action: "Clean the house", done: false },
        { action: "Do workout", done: true },
        { action: "Call family", done: false },
        { action: "Make Dinner", done: false }
      ],
      newItem: ""
    };
  }

  updateNewTodoValue = event => {
    this.setState({ newItem: event.target.value });
  };

  createNewTodoValue = () => {
    if (
      !this.state.toDoTasks.find(item => item.action === this.state.newItem)
    ) {
      this.setState({
        toDoTasks: [
          ...this.state.toDoTasks,
          { action: this.state.newItem, done: false }
        ],
        newItem: ""
      });
    }
  };

  changeStateData = () => {
    this.setState({
      userName: this.state.userName == "Richa" ? "Alex" : "Richa"
    });
  };

  toggleTodo = (todo) =>
    this.setState({
      toDoTasks: this.state.toDoTasks.map(item =>
        item.action === todo.action ? { ...item, done: !item.done } : item
      )
    });

  todoTableRows = () =>
    this.state.toDoTasks.map(item => (
      <tr key={item.action}>
        <td>{item.action}</td>
        <td>
          <input
            type="checkbox"
            checked={item.done}
            onChange={() => this.toggleTodo(item)}
          />
        </td>
      </tr>
    ));

  render = () => (
    <div>
      <h4 className="bg-primary text-white text-center p-2">
        {this.state.userName}'s Todo List (
        {this.state.toDoTasks.filter(t => !t.done).length}) items's left
      </h4>
      <div className="containter-fludi">
        <div className="m-1">
          <input
            className="form-control"
            value={this.state.newItem}
            onChange={this.updateNewTodoValue}
          />
          <button
            className="btn btn-danger mt-1"
            onClick={this.createNewTodoValue}
          >
            add new task
          </button>
        </div>
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th> Todo Task Name </th>
              <th> Done </th>
            </tr>
          </thead>
          <tbody>{this.todoTableRows()}</tbody>
        </table>
      </div>
    </div>
  );
}
