import React, { Component } from "react";
import classes from "./app.module.css";

class App extends Component {
  handleButtonClick = (event) => {
    console.log(event.target);
    console.log("I am a cute lettle button");
  };
  render() {
    return (
      <div className={classes.Wrapper}>
        <h1 className={classes.Heading}>Events in React</h1>
        <button onClick={this.handleButtonClick} className={classes.Btn}>
          Click Me
        </button>
      </div>
    );
  }
}

export default App;