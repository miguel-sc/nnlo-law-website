import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { filterList } from './../constants'
import { setFilter } from './../store/Filters'
import { getFilterItems } from './../selectors'
import { FormControl } from 'material-ui/Form'
import { createMuiTheme } from 'material-ui/styles'
import { InputLabel } from 'material-ui/Input'
import { MenuItem } from 'material-ui/Menu'
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
})

const mapStateToProps = (state) => {
  return {
    filters: state.Filters,
    filterItems: getFilterItems(state)
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    setFilter: setFilter
  }, dispatch)
}

class FilterBarItem extends Component {

  handleChange = (event) => {
    this.props.setFilter(event.target.value, this.props.barIndex)
  }

  render() {
    return (
      <FormControl style = {{margin: theme.spacing.unit, minWidth: 120}}>
        <InputLabel>{ filterList[this.props.barIndex].name }</InputLabel>
        <Select
          value={this.props.filters[this.props.barIndex]}
          onChange={this.handleChange}
        >
        <MenuItem value = ''>
          <em>None</em>
        </MenuItem>
        {
          this.props.filterItems[this.props.barIndex].map((filterName, index) =>
            <MenuItem key = { index } value = { filterName }>{ filterName }</MenuItem>
          )
        }
        </Select>
      </FormControl>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterBarItem)
