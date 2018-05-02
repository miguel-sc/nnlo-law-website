const OPENLIGHTBOX = 'LightboxState/OPENLIGHTBOX'
const CLOSELIGHTBOX = 'LightboxState/CLOSELIGHTBOX'
const PREVIOUSPLOT = 'LightboxState/PREVIOUSPLOT'
const NEXTPLOT = 'LightboxState/NEXTPLOT'
const SETCURRENTPLOT = 'LightboxState/SETCURRENTPLOT'

const defaultState = {
  isOpen: false,
  currentPlot: 0
}

const LightboxState = (state = defaultState, action = {}) => {
  switch(action.type) {
    case OPENLIGHTBOX:
      return {
        isOpen: true,
        currentPlot: action.payload
      }
    case CLOSELIGHTBOX:
      return {
        ...state,
        isOpen: false
      }
    case PREVIOUSPLOT:
      return {
        ...state,
        currentPlot: state.currentPlot - 1
      }
    case NEXTPLOT:
      return {
        ...state,
        currentPlot: state.currentPlot + 1
      }
    default: return state
  }
}

export const gotoPreviousPlot = () => {
  return {
    type: PREVIOUSPLOT
  }
}

export const gotoNextPlot = () => {
  return {
    type: NEXTPLOT
  }
}

export const openLightbox = (plot = 0) => {
  return {
    type: OPENLIGHTBOX,
    payload: plot
  }
}

export const closeLightbox = () => {
  return {
    type: CLOSELIGHTBOX
  }
}

export const setCurrentPlot = (plot) => {
  return {
    type: SETCURRENTPLOT,
    payload: plot
  }
}

export default LightboxState
