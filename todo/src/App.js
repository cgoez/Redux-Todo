import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './todolist'
import AddedTask from './addedTask'

class App extends Component { 
  render() {   
    return (
      <div className="App">
        <header className="App-header">
           <h1 className="App-title">Welcome to My todo App</h1>
        </header>
        <div>        
         <TodoList/> 
         <AddedTask/>
        </div>
      </div>
    );
  }
}

export default App;
