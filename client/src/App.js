import React, { Component } from 'react'
import MasonryInfiniteScroller from 'react-masonry-infinite'
import './App.css'
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card'
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import { createMuiTheme } from 'material-ui/styles'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Input, { InputLabel } from 'material-ui/Input'
import { MenuItem } from 'material-ui/Menu'
import { FormControl, FormHelperText } from 'material-ui/Form'
import Select from 'material-ui/Select'
import { getFilteredPlots } from './selectors'
import { fetchPlots } from './store/Plots'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import FilterBar from './components/FilterBar'

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

const mapStateToProps = (state) => {
  return {
    filteredPlots: getFilteredPlots(state)
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchPlots: fetchPlots
  }, dispatch)
}

class App extends Component {

  constructor(props) {
		super(props)
		this.state = {
      elements: [],
      firstID: [],
      plottype: '',
      channel: '',
      observable: ''
    }
	}

  componentDidMount() {
    this.props.fetchPlots()
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

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    if ((this.state.elements.length > 0) || (this.state.firstID.length > 0)) {
      return (
        <MuiThemeProvider theme={theme}>
          <div className="App">
              <AppBar position="static" style={{position: 'relative', zIndex: '1'}}>
                <Toolbar>
                  <Typography variant="title" color="inherit">
                    NNLO-Plots
                  </Typography>
                  <FilterBar/>
                </Toolbar>
              </AppBar>
            <div style = {{display: 'flex', justifyContent: 'center', padding: '10px'}}>
            <MasonryInfiniteScroller
              hasMore={true}
              loadMore={()=>this.loadelements()}
              sizes={[{ columns: 1, gutter: 10 }, { mq: '768px', columns: 2, gutter: 10 }, { mq: '1024px', columns: 3, gutter: 10 }]}
            >
            {
              this.state.elements.map((name, index) =>
              <div className = 'test' key = {index}>
                <Card className = 'card' style={{padding: '20px'}}>
                  <img src={name.src} alt = '' style={{width: '100%'}}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(App)
