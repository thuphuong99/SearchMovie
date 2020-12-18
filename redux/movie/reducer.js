import * as types from './type'

const initialState = {
    loadingMoive: null,
    dataMoive: [],
    errorMovie: null
}

export const movieReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.LOADING_SEARCH:
            return {
                ...state,
                ...{ loadingMoive: action.loading }
            }
        case types.CANCEL_SEARCH:
            return {
                ...state,
                ...{ loadingMoive: action.loading }
            }
        case types.SEARCH_MOVIE_SUCCESS:
            return {
                ...state,
                ...{ dataMoive: action.data, errorMovie: null }
            }
        case types.SEARCH_MOVIE_FAIL:
            return {
                ...state,
                ...{ dataMoive: null, errorMovie: error }
            }
        default:
            return state
    }

}