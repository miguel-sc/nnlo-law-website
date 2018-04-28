import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

class App extends Component {

  constructor(props) {
		super(props)
		this.state = {}
	}

  componentDidMount() {
    fetch('/users')
      .then(res => res.json())
      .then(users => this.setState({ firstID: users.firstID, secondID: users.secondID }))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div key = '1'>{ this.state.firstID }</div>
        <div key = '2'>{ this.state.secondID }</div>
      </div>
    );
  }
}

export default App
