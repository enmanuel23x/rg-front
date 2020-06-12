import '../App.css';
import React, { Component } from "react";
import ChartRenderer from './chart'
import Header from "../components/Header";

class Table extends Component {
  render() {
    return (
        <div className="App">
            <Header/>
            <ChartRenderer/>
        </div>
    );
  }
}
  
  export default Table;