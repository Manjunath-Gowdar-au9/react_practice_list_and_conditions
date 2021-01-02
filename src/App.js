import React, { Component, Fragment } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      persons: [
        { name: "max", age: 28 },
        { name: "manu", age: 29 },
        { name: "stephanie", age: 26 },
      ],
      otherState: "some other value",
    };
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: "manu", age: 29 },
        { name: "stephanie", age: 26 },
      ],
    });
  };

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: "max", age: 28 },
        { name: event.target.value, age: 29 },
        { name: "stephanie", age: 26 },
      ],
    });
  };

  render() {
    return (
      <Fragment>
        <center>
          <h1>hi i am manjunath</h1>
          <p>This is really working</p>
          <button onClick={() => this.switchNameHandler("maximillian!!")}>
            Switch Name
          </button>
          <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
          />
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, "Max!")}
            changed={this.nameChangedHandler}
          />
        </center>
      </Fragment>
    );
  }
}

export default App;
