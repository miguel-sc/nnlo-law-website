import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

class App extends Component {

  constructor(props) {
		super(props)
		this.state = {}
	}

  componentDidMount() {
    fetch('/plots')
      .then(res => res.json())
      .then(plots => this.setState({ firstID: plots.names}))
  }

  render() {
    console.log(this.state.firstID)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div key = '1'>{ this.state.firstID }</div>
      </div>
    );
  }
}

export default App
