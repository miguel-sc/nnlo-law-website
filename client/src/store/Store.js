import { combineReducers } from 'redux'
import Plots from './Plots'
import Filters from './Filters'

const reducer = combineReducers({
  Plots,
  Filters
})

export default reducer
