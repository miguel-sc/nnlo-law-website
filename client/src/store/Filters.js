import { filterList } from './../Constants'

const SETFILTER = 'Filters/SETFILTER'

const defaultState = Array(filterList.length).fill('')

const Filters = (state = defaultState, action = {}) => {
  switch(action.type) {
    case SETFILTER:
      state[action.payload.index] = action.payload.filter
      return state
    default: return state
  }
}

export const setFilter = (filter, index) => {
  return {
    type: SETFILTER,
    payload: {
      filter: filter,
      index:  index
    }
  }
}

export default Filters
