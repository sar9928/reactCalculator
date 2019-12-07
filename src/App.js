import React, {Component} from 'react';
import './App.css';
import AdditionCalc from './components/AdditionCalc';
import MultiplyCalc from './components/MultiplyCalc';
import DivisionCalc from './components/DivisionCalc';
import History from './components/History';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      historyAdd: "History List for Addition",
      historyDivide: "History List for Divide",
      historyMultiply: "History List for Multiply"
    };
  }

  onHistoryAddChange(newHistory) {
    this.setState({
      historyAdd: newHistory
    });
  }
  onHistoryDivideChange(newHistory) {
    this.setState({
      historyDivide: newHistory
    });
  }
  onHistoryMultiplyChange(newHistory) {
    this.setState({
      historyMultiply: newHistory
    });
  }
  
  render() {
    return (
      <div className="App">
        <h1 className="app-title">React JS Calculator</h1>
        <History historyAdd={this.state.historyAdd} />
        <History historyMultiply={this.state.historyMultiply} />
        <History historyDivide={this.state.historyDivide} />
        <div className="app-calcs">
          <AdditionCalc changeHistory={this.onHistoryAddChange.bind(this)}></AdditionCalc>
          <MultiplyCalc changeHistory={this.onHistoryMultiplyChange.bind(this)}></MultiplyCalc>
          <DivisionCalc changeHistory={this.onHistoryDivideChange.bind(this)}></DivisionCalc>
        </div>
      </div>
    );
  }
}

export default App;
