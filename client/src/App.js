import React, { Component } from 'react'
import './App.css'
import Typography from 'material-ui/Typography'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { getFilteredPlots } from './selectors'
import { fetchPlots } from './store/Plots'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import FilterBar from './components/FilterBar'
import PlotMasonry from './components/PlotMasonry'
import { theme } from './constants'

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
