import * as types from './type'

export const searcthMovieBykeyWord = (name) => ({
    type: types.SEARCH_MOVIE,
    name

})

export const startSearchMovie = (loading) => ({
    type: types.LOADING_SEARCH,
    loading
})

export const stopSearchMovie = (loading) => ({
    type: types.CANCEL_SEARCH,
    loading
})

export const searchMoiveSuccess = (data) => ({
    type: types.SEARCH_MOVIE_SUCCESS,
    data
})

export const searchMovieFailure = (error) => ({
    type: types.SEARCH_MOVIE_FAIL,
    error
})