import React, { Component } from 'react'
import MasonryInfiniteScroller from 'react-masonry-infinite'
import './App.css'
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import { createMuiTheme } from 'material-ui/styles';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#ae52d4',
      main: '#ffffff',
      dark: '#4a0072',
      contrastText: '#000',
    },
    secondary: {
      light: '#ff79b0',
      main: '#ff4081',
      dark: '#c60055',
      contrastText: '#000',
    },
  },
});

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
        <MuiThemeProvider theme={theme}>
          <div className="App">
            <div>
              <AppBar position="static">
                <Toolbar>
                  <Typography variant="title" color="inherit">
                    NNLO-law-Plots
                  </Typography>
                </Toolbar>
              </AppBar>
            </div>
            <div style = {{display: 'flex', justifyContent: 'center', padding: '10px'}}>
            <MasonryInfiniteScroller
              hasMore={true}
              loadMore={()=>this.loadelements()}
              sizes={[{ columns: 1, gutter: 10 }, { mq: '768px', columns: 2, gutter: 10 }, { mq: '1024px', columns: 3, gutter: 10 }]}
            >
            {
              this.state.elements.map((name, index) =>
              <div className = 'test'>
                <Card>
                  <img src={name.src} alt = '' key = {index} style={{width: '100%'}}/>
                </Card>
              </div>
              )
            }
            </MasonryInfiniteScroller>
            </div>
          </div>
        </MuiThemeProvider>
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
