import React, { Component } from "react";
import "./styles.css";
import ReactBootstrap from "react-bootstrap";

//Adding Dynamic data to app

export class TodoRow extends Component {
  render = () => (
    <tr>
      <td>{this.props.item.action}</td>
      <td>
        <input
          type="checkbox"
          checked={this.props.item.done}
          onChange={() => this.props.callback(this.props.item)}
        />
      </td>
    </tr>
  );
}
