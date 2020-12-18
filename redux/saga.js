import { all, call } from 'redux-saga/effects'
import { watchingMoiveSaga as moiveSaga } from './movie/saga'
import watchDetailSaga from './detail_movie/saga'

export default function* rootSaga() {
    yield all([
        call(moiveSaga),
        call(watchDetailSaga)
    ])
}