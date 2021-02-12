import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons : [
      { name: 'Riya', age: 21 },
      { name: 'Jasleen', age: 21 },
      { name: 'Ong', age: 21 },
    ] 
  }

  switchNameHandler = () => {
    //console.log('clicked');
    //Dont do this ------> this.state.persons[0].name = 'Riyakaram';
    this.setState( {
      persons: [
        { name: 'Riyakaram', age: 21 },
        { name: 'Jassu', age: 21 },
        { name: 'Ong', age: 22 },
      ] 
    })
  }
  render() {
    return (
      <div className="App">
        <h1>Hi, this is Anu</h1>
        <p>These are my friends!</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My hobbies: Reading</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Check'));
  }
}

export default App;
