import { call, put, takeLatest } from 'redux-saga/effects'
import * as actions from './action'
import * as types from './type'
import * as api from '../services/api'

function* searchMoiveSaga({ name }) {
    try {
        yield put(actions.startSearchMovie(true))
        const response = yield call(api.searchMovieByKeyword, name)
        if (response) {
            yield put(actions.searchMoiveSuccess(response))
        } else {
            yield put(actions.searchMovieFailure({
                code: 404,
                message: 'Movie not found'
            }))
        }
    } catch (error) {
        yield put(actionssearchMovieFailure(error))
    } finally {
        yield put(actions.stopSearchMovie(false))
    }
}

export function* watchingMoiveSaga() {
    yield takeLatest(types.SEARCH_MOVIE, searchMoiveSaga)
}