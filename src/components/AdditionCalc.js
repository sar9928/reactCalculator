import React, { Component } from "react";
import "./AdditionCalc.css";
import Button from "./Button";
import Input from "./Input";
import ClearButton from "./ClearButton";

class AdditionCalc extends Component {
  constructor() {
    super();

    this.state = {
      input: "",
      previousNumber: "",
      currentNumber: "",
      operator: "",
      historyAdd: " "
    };
  }

  addToInput = val => {
    this.setState({ 
      input: this.state.input + val
    });
  };

  addZeroToInput = val => {
    // if not empty add zero
    if (this.state.input !== "") {
      this.setState({ 
        input: this.state.input + val});
    }
  };

  clearInput = () => {
    this.setState({ 
      input: "", 
    });
  };

  addition = () => {
    this.state.previousNumber = this.state.input;
    this.setState({ 
      input: "",
    });
    this.state.operator = "+";
  };

  equals = () => {
    this.state.currentNumber = this.state.input;

    // checks if addition operator was pressed
    if (this.state.operator == "+") {
      this.setState({
        input:
          parseFloat(this.state.previousNumber) +
          parseFloat(this.state.currentNumber),
        
        historyAdd: 
          this.state.historyAdd + 
          this.state.previousNumber +
          this.state.operator +
          this.state.currentNumber +
          "="+
          (parseFloat(this.state.previousNumber) +
          parseFloat(this.state.currentNumber)) +
          ", "
      });
    }
  };

  changeHistoryVal() {
    this.props.changeHistory(this.state.historyAdd);
  }

  render() {
    return (
      <div className="AdditionCalc">
        <div className="add-calc-wrapper">
          <div className="row">
            <Input>{this.state.input}</Input>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>1</Button>
            <Button handleClick={this.addToInput}>2</Button>
            <Button handleClick={this.addToInput}>3</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>4</Button>
            <Button handleClick={this.addToInput}>5</Button>
            <Button handleClick={this.addToInput}>6</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>7</Button>
            <Button handleClick={this.addToInput}>8</Button>
            <Button handleClick={this.addToInput}>9</Button>
          </div>
          <div className="row">
            <Button handleClick={this.equals}>=</Button>
            <Button handleClick={this.addZeroToInput}>0</Button>
            <Button handleClick={this.addition}>+</Button>
          </div>
          <div className="row">
            <ClearButton handleClear={this.clearInput}>Clear</ClearButton>
          </div>
          <div className="row">
            <button onClick={this.changeHistoryVal.bind(this)}>Update Addition History</button>
          </div>
        </div>
      </div>
    );
  }
}

export default AdditionCalc;
