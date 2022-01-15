import { AnyAction } from 'redux';
import { takeLatest, call, put, all, fork } from 'redux-saga/effects';

import { ItemActionType } from 'store/action-types/item';

import { COMMENTS_LIMIT } from 'config/pagination';

import { fetchItem } from 'utils/api';

import { StoryInterface } from 'types/story';
import { CommentInterface } from 'types/comment';

function* fetchItemWithCommentsSaga({ payload: { id } }: AnyAction) {
  const { data: story } = yield call(fetchItem, id);

  yield put({
    type: ItemActionType.SET_ITEM,
    payload: {
      item: story as StoryInterface,
    },
  });

  const commentsPaginated = story.kids
    ? story.kids.slice(0, COMMENTS_LIMIT)
    : [];

  // First depth level comments
  // TODO: Fix
  // @ts-ignore
  const comments = yield Promise.all(
    commentsPaginated.map(
      (kid: number): Promise<CommentInterface> =>
        new Promise((resolve) => {
          fetchItem(kid).then((response) =>
            resolve(response.data as CommentInterface)
          );
        })
    )
  );

  yield put({
    type: ItemActionType.SET_COMMENTS,
    payload: {
      comments,
    },
  });
}

function* watchOnFetchItemWithComments() {
  yield takeLatest(
    ItemActionType.FETCH_ITEM_WITH_COMMENTS,
    fetchItemWithCommentsSaga
  );
}

function* clearItemWithCommentsSaga() {
  yield put({
    type: ItemActionType.CLEAR_ITEM_WITH_COMMENTS,
  });
}

function* onClearItemWithComments() {
  yield takeLatest(
    ItemActionType.CLEAR_ITEM_WITH_COMMENTS,
    clearItemWithCommentsSaga
  );
}

export default function* itemSaga() {
  yield all([
    fork(watchOnFetchItemWithComments),
    fork(onClearItemWithComments),
  ]);
}
