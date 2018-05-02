import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Card from 'material-ui/Card'
import { openLightbox } from './../store/LightboxState'

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    openLightbox: openLightbox
  }, dispatch)
}

class PlotMasonryItem extends Component {

  handleClick() {
    this.props.openLightbox(this.props.plotIndex)
  }

  render() {
    return (
      <div className = 'test'>
        <Card className = 'card' onClick={() => this.handleClick()} style={{padding: '20px'}}>
          <img src={this.props.src} alt = '' style={{width: '100%'}}/>
        </Card>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlotMasonryItem)
