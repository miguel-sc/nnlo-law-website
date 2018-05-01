const FETCH = 'Plots/FETCH'

const Plots = (state = [], action = {}) => {
  switch(action.type) {
    case FETCH:
      return action.payload.names
    default: return state
  }
}

export const fetchPlots = () => {
  const plots = fetch('/plots').then(res => res.json())
  return {
    type: FETCH,
    payload: plots
  }
}

export default Plots
