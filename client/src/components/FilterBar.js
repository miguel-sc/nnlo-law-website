import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import FilterBarItem from './FilterBarItem'
import { filterList } from './../constants'
import styled from 'styled-components'

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
      <StyledForm autoComplete = 'off'>
        {
          filterList.map((filter, index) =>
            <FilterBarItem key = { index } barIndex = { index }/>
          )
        }
      </StyledForm>
    )
  }
}

const StyledForm = styled.form`
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
  padding-bottom: 25px;
`

export default connect(mapStateToProps, mapDispatchToProps)(FilterBar)
