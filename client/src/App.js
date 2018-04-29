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
      firstID: [],
      plottype: '',
      channel: '',
      observable: ''
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

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    if ((this.state.elements.length > 0) || (this.state.firstID.length > 0)) {
      return (
        <MuiThemeProvider theme={theme}>
          <div className="App">
            <div>
              <AppBar position="static" className="MuiPaper-elevation2-13">
                <Toolbar>
                  <Typography variant="title" color="inherit">
                    NNLO-Plots
                  </Typography>
                  <form autoComplete="off" style = {{display: 'flex', flexWrap: 'wrap', padding: '10px', paddingBottom: '25px'}}>
                    <FormControl style = {{margin: theme.spacing.unit, minWidth: 120}}>
                      <InputLabel htmlFor="plottype-simple">PlotType</InputLabel>
                      <Select
                        value={this.state.plottype}
                        onChange={this.handleChange}
                        inputProps={{
                          name: 'plottype',
                          id: 'plottype-simple',
                        }}
                      >
                      <MenuItem value="">
                        <em>None</em>
                       </MenuItem>
                       <MenuItem value={10}>Ten</MenuItem>
                       <MenuItem value={20}>Twenty</MenuItem>
                       <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </FormControl>
                    <FormControl style = {{margin: theme.spacing.unit, minWidth: 120}}>
                      <InputLabel htmlFor="channel-simple">Channel</InputLabel>
                      <Select
                        value={this.state.channel}
                        onChange={this.handleChange}
                        inputProps={{
                          name: 'channel',
                          id: 'channel-simple',
                        }}
                      >
                      <MenuItem value="">
                        <em>None</em>
                       </MenuItem>
                       <MenuItem value={10}>Ten</MenuItem>
                       <MenuItem value={20}>Twenty</MenuItem>
                       <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </FormControl>
                    <FormControl style = {{margin: theme.spacing.unit, minWidth: 120}}>
                      <InputLabel htmlFor="observable-simple">Observable</InputLabel>
                      <Select
                        value={this.state.observable}
                        onChange={this.handleChange}
                        inputProps={{
                          name: 'observable',
                          id: 'observable-simple',
                        }}
                      >
                      <MenuItem value="">
                        <em>None</em>
                       </MenuItem>
                       <MenuItem value={10}>Ten</MenuItem>
                       <MenuItem value={20}>Twenty</MenuItem>
                       <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </FormControl>
                  </form>
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
              <div className = 'test' key = {index}>
                <Card style={{padding: '20px', boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.14)'}}>
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

export default App
