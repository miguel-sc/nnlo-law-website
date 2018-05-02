import { combineReducers } from 'redux'
import Plots from './Plots'
import Filters from './Filters'
import MasonryPlots from './MasonryPlots'
import LightboxState from './LightboxState'

const reducer = combineReducers({
  Plots,
  Filters,
  MasonryPlots,
  LightboxState
})

export default reducer
