import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import Icon from "@material-ui/core/Icon";

import DatePickerDialog from "./DatePickerDialog";

class DatePicker extends Component {
  state = {
    date: undefined,
    text: "",
    openDialog: false
  };

  handleClick = event => {
    this.openDialog();
  };

  openDialog() {
    this.setState({
      date: undefined,
      text: "",
      openDialog: true
    });
  }

  render() {
    return (
      <div>
        <div
          style={{
            display: "inline-block",
            position: "relative",
            width: "100%"
          }}
        >
          <p> Hi there ! </p>
          <TextField
            onChange={this.handleText}
            onBlur={this.handleBlur}
            ref="input"
            value={this.state.text}
          />
          <IconButton
            style={{
              position: "absolute",
              right: 2,
              top: 10 + (this.props.floatingLabelText ? 24 : 0),
              padding: 0,
              width: 28,
              height: 28
            }}
            onClick={this.handleClick}
            tabIndex={-1}
          >
            <Icon>alarm</Icon>
          </IconButton>
        </div>
        <DatePickerDialog show={this.state.openDialog} />
      </div>
    );
  }
}

export default DatePicker;
