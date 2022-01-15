import { all, fork } from 'redux-saga/effects';

import storiesSaga from './storiesSaga';
import itemSaga from './itemSaga';
import userSaga from './userSaga';

export default function* rootSaga() {
  yield all([fork(storiesSaga), fork(itemSaga), fork(userSaga)]);
}
