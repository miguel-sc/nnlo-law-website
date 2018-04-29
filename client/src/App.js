import React, { Component } from 'react'
import MasonryInfiniteScroller from 'react-masonry-infinite'
import logo from './logo.svg'
import './App.css'

class App extends Component {

  constructor(props) {
		super(props)
		this.state = {
      elements: [],
      firstID: []
    }
	}

  componentDidMount() {
    fetch('/plots')
      .then(res => res.json())
      .then(plots => this.setState({ firstID: plots.names }))
    //  .then(() => this.loadelements())
  }

  loadImg(img) {
    console.log(img.path[0].src + ' loaded')
    let a = this.state.elements
    a.push({
      src: img.path[0].src,
      height: img.path[0].naturalHeight,
      width: img.path[0].naturalWidth
    })
    this.setState({ elements: a })
  }

  loadelements() {
    console.log('loadelements')
    if (this.state.firstID.length > 0) {
      var img = new Image()
      img.src = this.state.firstID.pop()
      img.onload = (img) => this.loadImg(img)
    }
  }

  render() {
    if ((this.state.elements.length > 0) || (this.state.firstID.length > 0)) {
      return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <MasonryInfiniteScroller
            hasMore={true}
            loadMore={()=>this.loadelements()}
          >
          {
            this.state.elements.map((name, index) =>
              <img src={name.src} alt = '' key = {index} width = {375} height = {(375*name.height/name.width)}/>
            )
          }
          </MasonryInfiniteScroller>
        </div>
      )
    } else {
      return (
        <div className="App">
        </div>
      )
    }

  }
}

export default App
