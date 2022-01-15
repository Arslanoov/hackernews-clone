import { AnyAction } from 'redux';
import { takeLatest, select, call, put, all, fork } from 'redux-saga/effects';

import { StoriesActionType } from 'store/action-types/stories';

import { STORIES_PER_PAGE } from 'config/pagination';

import { fetchItem, fetchStories } from 'utils/api';
import { removeUriFromUrl } from 'utils/helpers/removeUri';

import { StoryInterface } from 'types/story';

function* fetchListItems({ payload: { type, page = 1 } }: AnyAction) {
  const { stories: list } = yield select();

  const paginatedStoriesList = (list?.lists[type] as number[]).slice(
    STORIES_PER_PAGE * (page - 1),
    STORIES_PER_PAGE * page
  );

  // @ts-ignore
  const stories = yield Promise.all(
    paginatedStoriesList.map(
      (id: number): Promise<StoryInterface> =>
        new Promise<StoryInterface>((resolve) => {
          fetchItem(id).then((response) =>
            resolve(response.data as StoryInterface)
          );
        })
    )
  );

  stories.forEach(
    (item: StoryInterface) =>
      item.url && (item.domainUrl = removeUriFromUrl(item.url))
  );

  yield put({
    type: StoriesActionType.SET_STORIES_LIST,
    payload: {
      items: stories,
    },
  });
}

function* onFetchListItems() {
  yield takeLatest(StoriesActionType.FETCH_LIST_ITEMS, fetchListItems);
}

function* fetchStoriesList({ payload: { type } }: AnyAction) {
  const { data: storiesList } = yield call(fetchStories, type);
  yield put({
    type: StoriesActionType.SET_LIST,
    payload: {
      list: type,
      listItems: storiesList,
    },
  });

  yield fetchListItems({
    type: StoriesActionType.FETCH_LIST_ITEMS,
    payload: {
      type,
      page: 1,
    },
  });
}

function* onFetchStories() {
  yield takeLatest(StoriesActionType.FETCH_STORIES_LIST, fetchStoriesList);
}

function* clearStoriesList() {
  yield put({
    type: StoriesActionType.CLEAR_LIST,
  });
}

function* onClearStoriesList() {
  yield takeLatest(StoriesActionType.CLEAR_STORIES_LIST, clearStoriesList);
}

export default function* storiesSaga() {
  yield all([
    fork(onFetchStories),
    fork(onFetchListItems),
    fork(onClearStoriesList),
  ]);
}
