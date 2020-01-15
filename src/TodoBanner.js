import React, { Component } from "react";
import "./styles.css";
import ReactBootstrap from "react-bootstrap";

//Adding Dynamic data to app

export class TodoBanner extends Component {
  render = () => 
    <h4 className="bg-primary text-white text-center p-2">
      {this.props.name}'s Todo List (
      {this.props.tasks.filter(t => !t.done).length}) items's left
    </h4>
}
