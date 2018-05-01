import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import FilterBarItem from './FilterBarItem'
import { filterList } from './../constants'

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
  }, dispatch)
}

class FilterBar extends Component {

  render() {
    return (
      <form autoComplete = 'off' style = {{display: 'flex', flexWrap: 'wrap', padding: '10px', paddingBottom: '25px'}}>
      {
        filterList.map((filter, index) =>
          <FilterBarItem key = { index } barIndex = { index }/>
        )
      }
      </form>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterBar)
