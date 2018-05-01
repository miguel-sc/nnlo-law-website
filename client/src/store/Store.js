import { combineReducers } from 'redux'
import Plots from './Plots'
import Filters from './Filters'
import MasonryPlots from './MasonryPlots'

const reducer = combineReducers({
  Plots,
  Filters,
  MasonryPlots
})

export default reducer
