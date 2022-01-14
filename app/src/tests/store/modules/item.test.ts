import store from 'store';
import { ItemActionType } from 'store/action-types/item';

import * as api from 'utils/api';

import { storyMock as story } from 'tests/dummy/story';

import { fetchItemWithComments } from 'store/action-creators/item';

import { StoryInterface } from 'types/story';
import { CommentInterface } from 'types/comment';
import { ItemResponse } from 'types/response/item';

describe('Item sync actions', () => {
  it('sets item', () => {
    store.dispatch({
      type: ItemActionType.SET_ITEM,
      payload: { item: story as StoryInterface },
    });

    expect(store.getState().item?.story).toStrictEqual(story);
  });

  it('sets comments', () => {
    store.dispatch({
      type: ItemActionType.SET_COMMENTS,
      payload: { comments: [1, 2, 3] as unknown as CommentInterface[] },
    });

    expect(store.getState().item?.comments).toStrictEqual([1, 2, 3]);
  });

  it('clears item and comments', () => {
    expect(store.getState().item?.story).not.toBeNull();
    expect(store.getState().item?.comments).not.toStrictEqual([]);

    store.dispatch({
      type: ItemActionType.CLEAR_ITEM_WITH_COMMENTS,
    });

    expect(store.getState().item?.story).toBeNull();
    expect(store.getState().item?.comments).toStrictEqual([]);
  });
});

describe('Item async actions', () => {
  it('fetch item with comments', async () => {
    const itemSpy = jest.spyOn(api, 'fetchItem').mockResolvedValue({
      data: {
        id: 1,
        kids: [1, 1, 1],
      },
    } as unknown as ItemResponse);

    // TODO: Remove ts ignore
    // @ts-ignore
    await store.dispatch(fetchItemWithComments(1));

    expect(itemSpy).toBeCalledTimes(4);
  });
});
