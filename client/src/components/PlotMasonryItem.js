import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Card from 'material-ui/Card'

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
  }, dispatch)
}

class PlotMasonryItem extends Component {

  render() {
    return (
      <div className = 'test'>
        <Card className = 'card' style={{padding: '20px'}}>
          <img src={this.props.asdf} alt = '' style={{width: '100%'}}/>
        </Card>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlotMasonryItem)
