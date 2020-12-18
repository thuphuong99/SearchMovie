import { createSelector } from 'reselect'

const moivesSelector = state => state.movies

export const loadingSearch = createSelector(
    moivesSelector,
    item => item.loadingMoive
)
export const dataSreachMoives = createSelector(
    moivesSelector,
    item => item.dataMoive.results
)

export const getTotalPages = createSelector(
    moivesSelector,
    item => item.dataMoive.total_pages
)
export const getTotalResults = createSelector(
    moivesSelector,
    item => item.dataMoive.total_results
)