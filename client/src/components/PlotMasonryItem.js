import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Card from 'material-ui/Card'
import { openLightbox } from './../store/LightboxState'
import styled from 'styled-components'

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
      <MasonryItemContainer>
        <StyledCard onClick={() => this.handleClick()}>
          <img src={this.props.src} alt = ''/>
        </StyledCard>
      </MasonryItemContainer>
    )
  }
}

const MasonryItemContainer = styled.div`
  width: calc(100vw - 20px);

  @media (min-width: 768px) {
    width: calc(50vw - 15px);
  }

  @media (min-width: 1024px) {
    width: calc(33.3vw - 13.3px);
  }
`

const StyledCard = styled(Card)`
  padding: 20px;
  position: relative;
  z-index: 0;
  transition: box-shadow 0.15s ease-in-out;
  transition: transform 0.15s ease-in-out;

  img {
    width: 100%;
  }

  &:hover {
    cursor: pointer;
    z-index: 1;
    transform: scale(1.01, 1.01);
    box-shadow: 0px 2px 5px 1px rgba(0, 0, 0, 0.3) !important;
  }
`

export default connect(mapStateToProps, mapDispatchToProps)(PlotMasonryItem)
