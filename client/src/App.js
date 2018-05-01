import React, { Component } from 'react'
import './App.css'
import Typography from 'material-ui/Typography'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import { createMuiTheme } from 'material-ui/styles'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { getFilteredPlots } from './selectors'
import { fetchPlots } from './store/Plots'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import FilterBar from './components/FilterBar'
import PlotMasonry from './components/PlotMasonry'

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

  componentDidMount() {
    this.props.fetchPlots()
  }

  render() {
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
          <PlotMasonry/>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
