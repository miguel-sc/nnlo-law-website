import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { filterList } from './../constants'
import { setFilter } from './../store/Filters'
import { getFilterItems } from './../selectors'
import { FormControl } from 'material-ui/Form'
import { InputLabel } from 'material-ui/Input'
import { MenuItem } from 'material-ui/Menu'
import Select from 'material-ui/Select'
import { theme } from './../constants'
import styled from 'styled-components'

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
      <StyledFormControl>
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
      </StyledFormControl>
    )
  }
}

const StyledFormControl = styled(FormControl)`
  margin: ${ theme.spacing.unit }px !important;
  min-width: 120px !important;
`

export default connect(mapStateToProps, mapDispatchToProps)(FilterBarItem)
