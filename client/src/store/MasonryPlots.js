const SETFILTER = 'Filters/SETFILTER'
const ADDPLOT = 'MasonryPlots/ADDPLOT'

const MasonryPlots = (state = [], action = {}) => {
  switch(action.type) {
    case SETFILTER:
      return []
    case ADDPLOT:
      return [...state, action.payload]
    default: return state
  }
}

export const addPlot = (plot) => {
  return {
    type: ADDPLOT,
    payload: plot
  }
}

export default MasonryPlots
