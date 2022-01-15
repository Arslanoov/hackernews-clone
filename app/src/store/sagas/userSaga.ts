import { AnyAction } from 'redux';
import { takeLatest, put, call, all, fork } from 'redux-saga/effects';

import { UserActionType } from 'store/action-types/user';

import { fetchUser as requestUser } from 'utils/api';

function* fetchUserSaga({ payload: { username } }: AnyAction) {
  const { data: user } = yield call(requestUser, username);

  yield put({
    type: UserActionType.SET_USER,
    payload: {
      user,
    },
  });
}

function* onFetchUser() {
  yield takeLatest(UserActionType.FETCH_USER, fetchUserSaga);
}

export default function* userSaga() {
  yield all([fork(onFetchUser)]);
}
