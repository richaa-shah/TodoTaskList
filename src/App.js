import React, { Component } from "react";
import "./styles.css";
import ReactBootstrap from "react-bootstrap";
import { TodoBanner } from "./TodoBanner";
import { TodoRow } from "./TodoRow";
import { TodoCreater } from "./TodoCreater";
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
    };
  }

  updateNewTodoValue = event => {
    this.setState({ newItem: event.target.value });
  };

  createNewTodoValue = task => {
    if (!this.state.toDoTasks.find(item => item.action === task)) {
      this.setState({
        toDoTasks: [...this.state.toDoTasks, { action: task, done: false }]
      });
    }
  };

  toggleTodo = todo =>
    this.setState({
      toDoTasks: this.state.toDoTasks.map(item =>
        item.action === todo.action ? { ...item, done: !item.done } : item
      )
    });

  deleteTodo = todo => {
    console.log(todo);
    this.state.toDoTasks.splice(todo);
    this.setState({
      toDoTasks: this.state.toDoTasks.map(item => {
        item;
      })
    });
  };

  donetodoTableRows = () =>
    this.state.toDoTasks
      .filter(check => check.done)
      .map(item => (
        <TodoRow key={item.action} item={item} callback={this.toggleTodo} />
      ));

  notdonetodoTableRows = () =>
    this.state.toDoTasks
      .filter(check => !check.done)
      .map(item => (
        <TodoRow key={item.action} item={item} callback={this.toggleTodo} />
      ));

  render = () => (
    <div>
      <TodoBanner name={this.state.userName} 
                 tasks={this.state.toDoTasks} />
      <div className="containter-fluid">
        <TodoCreater callback={this.createNewTodoValue} />
        <table className="table table-bordered">
          <thead>
            <tr>
              <th className="task"> Done Tasks </th>
              <th className="done"> Done </th>
            </tr>
          </thead>
          <tbody className="doneItems">{this.donetodoTableRows()}</tbody>
        </table>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th className="task"> To Do Tasks </th>
              <th className="done"> Done </th>
            </tr>
          </thead>
          <tbody>{this.notdonetodoTableRows()}</tbody>
        </table>
      </div>
    </div>
  );
}
