import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Lightbox from 'react-images'
import { getFilteredPlots } from './../selectors'
import { gotoPreviousPlot, gotoNextPlot, closeLightbox } from './../store/LightboxState'
import { serverAdress } from './../constants'

const mapStateToProps = (state) => {
  return {
    filteredPlots: getFilteredPlots(state),
    LightboxState: state.LightboxState
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    gotoPreviousPlot: gotoPreviousPlot,
    gotoNextPlot: gotoNextPlot,
    closeLightbox: closeLightbox
  }, dispatch)
}

class PlotLightbox extends Component {

  render() {
    return (
      <Lightbox
        images={this.props.filteredPlots.map((plot) => {return {src: serverAdress + plot}})}
        isOpen={this.props.LightboxState.isOpen}
        currentImage={this.props.LightboxState.currentPlot}
        onClickPrev={this.props.gotoPreviousPlot}
        onClickNext={this.props.gotoNextPlot}
        onClose={this.props.closeLightbox}
      />
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlotLightbox)
