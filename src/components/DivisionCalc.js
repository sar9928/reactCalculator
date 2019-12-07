import React, {Component} from 'react';
import './DivisionCalc.css';
import Button from './Button';
import Input from './Input';
import ClearButton from './ClearButton';

class DivisionCalc extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      input: "",
      previousNumber: "",
      currentNumber: "",
      operator: "",
      historyDivide: " "
    }
  }

  addToInput = val => {
    this.setState({ input: this.state.input + val});
  };

  addZeroToInput = val => {
    // if not empty add zero
    if(this.state.input !== "") {
      this.setState({ input: this.state.input + val});
    }
  };

  clearInput = () => {
    this.setState({ input: ""});
  };

  divide = () => {
    this.state.previousNumber = this.state.input;
    this.setState({ input: ""});
    this.state.operator = "/";
  };

  equals = () => {
    this.state.currentNumber = this.state.input;

    if(this.state.operator == "/") {
      this.setState({
        input: parseFloat(this.state.previousNumber) / 
        parseFloat(this.state.currentNumber),

        historyDivide: 
          this.state.historyDivide + 
          this.state.previousNumber +
          this.state.operator +
          this.state.currentNumber +
          "="+
          (parseFloat(this.state.previousNumber) +
          parseFloat(this.state.currentNumber)) +
          ", "
      });
    }
  }

  changeHistoryVal() {
    this.props.changeHistory(this.state.historyDivide);
  }

  render() {
    return (
      <div className="DivisionCalc">
        <div className="divide-calc-wrapper">
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
              <Button handleClick={this.divide}>/</Button>
            </div>
            <div className="row">
              <ClearButton handleClear={this.clearInput}>Clear</ClearButton>
            </div>
            <div className="row">
            <button onClick={this.changeHistoryVal.bind(this)}>Update Division History</button>
          </div>
        </div>
      </div>
    );
  }
}

export default DivisionCalc;
