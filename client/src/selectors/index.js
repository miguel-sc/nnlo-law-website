import { createSelector } from 'reselect'
import { filterList } from './../constants'

const getPlots = (state) => state.Plots
const getFilters = (state) => state.Filters

export const getFilteredPlots = createSelector(
  [getPlots, getFilters],
  (plots, filters) => {
    let filteredPlots = plots
    for (let f = 0; f < filters.length; f++) {
      if (filters[f] !== '') {
        let subIndex = filterList[f].subIndex
        let tempPlots = []
        for (let p = 0; p < filteredPlots.length; p++) {
          if (plots[p].split('/')[subIndex] === filters[f]) {
            tempPlots.push(plots[p])
          }
        }
        filteredPlots = tempPlots
      }
    }
    return filteredPlots
  }
)

export const getFilterItems = createSelector(
  getPlots,
  (plots) => {
    let filterItems = []
    for (let f = 0; f < filterList.length; f++) {
      let items = []
      let subIndex = filterList[f].subIndex
      for (let p = 0; p < plots.length; p++) {
        let item = plots[p].split('/')[subIndex]
        if (items.indexOf(item) === -1) {
          items.push(item)
        }
      }
      filterItems.push(items)
    }
    return filterItems
  }
)
