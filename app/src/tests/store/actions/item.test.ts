import store from 'store';
import { ItemActionType } from 'store/action-types/item';

import { storyMock as story } from 'tests/dummy/story';

import { StoryInterface } from 'types/story';
import { CommentInterface } from '../../../types/comment';

describe('Item store module', () => {
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
