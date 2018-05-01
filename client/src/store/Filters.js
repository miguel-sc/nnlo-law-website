import { filterList } from './../constants'
import update from 'react-addons-update'

const SETFILTER = 'Filters/SETFILTER'

const defaultState = Array(filterList.length).fill('')

const Filters = (state = defaultState, action = {}) => {
  switch(action.type) {
    case SETFILTER:
      return update(state, {
        [action.payload.index]: {$set: action.payload.filter}
      })
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
