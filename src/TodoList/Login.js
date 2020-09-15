import React, { Component } from "react";
import { NavLink } from 'react-router-dom';

class Login extends Component{
  constructor() {
    super();
    this.state = {
      loggedInStatus: "NOT_LOGGED_IN",
      users: [],
      username: 'tove',
      password: 4430
    }
  }

  componentDidMount() {
    this.getUsers();
  }

  getUsers() {
    fetch('http://localhost:4001/api/v1/users')
        .then(response => response.json())
        .then(response_users => {
            this.setState({
                users: response_users
            })
        });

}

handleInputChange = (e) => { this.setState({
  [e.target.name]: e.target.value
})
}
/*
handleSubmit = (e) => {
e.preventDefault()

const reqObj = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body:  JSON.stringify(this.state)
}

fetch('http://localhost:3000/api/v1/auth', reqObj)
.then(resp => resp.json())
.then(data => {
  if (data.error) {
    this.setState({
      error: data.error
    })
  } else {
    this.state.loginSuccess(data)
    this.state.history.push('/')
  }
})
}
*/
  render() {
    console.log(this.state.users)
    return(
      <div className="Login">
        <h3>Sign in</h3>
        {this.state.error ? <h6>{this.state.error}</h6> : null}
        <form onSubmit={this.handleSubmit}>
          <label>username: </label>
          <input name={'username'} onChange={this.handleInputChange} value={this.state.username} />
          <br/>
          <br/>
          <label>password: </label>
          <input name={'password'} onChange={this.handleInputChange} value={this.state.password} />
          <br/>
          <br/>
          <input type='submit' value='login' />
        </form>
        <br/>
          <NavLink to="/todos">
            Todos
          </NavLink>
      </div>
    )
  }
}

export default Login;
