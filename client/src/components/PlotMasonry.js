import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PlotMasonryItem from './PlotMasonryItem'
import { getFilteredPlots } from './../selectors'
import MasonryInfiniteScroller from 'react-masonry-infinite'
import { addPlot } from './../store/MasonryPlots'
import PlotLightbox from './PlotLightbox'
import styled from 'styled-components'

const mapStateToProps = (state) => {
  return {
    filteredPlots: getFilteredPlots(state),
    MasonryPlots: state.MasonryPlots
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addPlot: addPlot
  }, dispatch)
}

class PlotMasonry extends Component {

  constructor(props) {
		super(props)
		this.state = {
      loadMore: true
    }
	}

  loadImg(img) {
    this.props.addPlot(this.props.filteredPlots[this.props.MasonryPlots.length])
    this.setState({loadMore: true})
  }

  loadelements() {
    if ((this.props.MasonryPlots.length < this.props.filteredPlots.length) && (this.state.loadMore)) {
      this.setState({loadMore: false})
      var img = new Image()
      img.src = this.props.filteredPlots[this.props.MasonryPlots.length]
      img.onload = (img) => this.loadImg(img)
    }
  }

  render() {
    if (this.props.MasonryPlots.length > 0) {
      return (
        <MasonryContainer>
          <MasonryInfiniteScroller
            hasMore={true}
            loadMore={()=>this.loadelements()}
            sizes={[
              { columns: 1, gutter: 10 },
              { mq: '768px', columns: 2, gutter: 10 },
              { mq: '1024px', columns: 3, gutter: 10 }
            ]}
          >
          {
            this.props.MasonryPlots.map((name, index) =>
            <PlotMasonryItem key = { index } src = { name } plotIndex = { index }/>
            )
          }
          </MasonryInfiniteScroller>
          <PlotLightbox/>
        </MasonryContainer>
      )
    } else {
      this.loadelements()
      return (
        <div/>
      )
    }
  }
}

const MasonryContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px;
`

export default connect(mapStateToProps, mapDispatchToProps)(PlotMasonry)
