import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import GenerateTodo from './TodoList/GenerateTodo';
import Login from './TodoList/Login';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/todos" component={GenerateTodo} />
        </Switch>
      </header>
    </div>
  );
}

export default App;
