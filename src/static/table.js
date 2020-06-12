import '../App.css';
import React, { Component } from "react";
import ChartRenderer from './chart'

class Table extends Component {
  render() {
    return (
        <div className="App">
            <ChartRenderer/>
        </div>
    );
  }
}
  
  export default Table;